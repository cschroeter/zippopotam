'use server'
import { Effect, Schema, pipe } from 'effect'
import { type Location, findLocation } from '~/lib/client'

const SearchLocationInput = Schema.Struct({
  zip: Schema.String,
  countryCode: Schema.String.pipe(Schema.optionalWith({ default: () => 'us' })),
})

interface FormState {
  status?: 'success' | 'info' | 'error' | (string & {})
  location?: Location
  message?: string
}

export const searchLocation = async (_: FormState, formData: FormData): Promise<FormState> =>
  Effect.runPromise(
    pipe(
      Schema.decodeUnknown(SearchLocationInput)({
        zip: formData.get('zip'),
        countryCode: formData.get('countryCode'),
      }),
      Effect.flatMap((input) =>
        findLocation(input).pipe(
          Effect.map((location) => ({ status: 'success', location })),
          Effect.catchTags({
            ParseError: () => Effect.succeed({ status: 'info', message: 'Invalid postal code' }),
            TimeoutException: () => Effect.succeed({ status: 'error', message: 'Timeout' }),
          }),
          Effect.catchAll(() => Effect.succeed({ status: 'error', message: 'Server Error' })),
        ),
      ),
    ),
  )
