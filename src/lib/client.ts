import { FetchHttpClient, HttpClient, HttpClientResponse } from '@effect/platform'
import { Effect, Schema } from 'effect'

export type Location = Schema.Schema.Type<typeof LocationSchema>

/**
 * @see https://api.zippopotam.us/
 */
const LocationSchema = Schema.Struct({
  'post code': Schema.String,
  country: Schema.String,
  'country abbreviation': Schema.String,
  places: Schema.Array(
    Schema.Struct({
      'place name': Schema.String,
      longitude: Schema.String,
      state: Schema.String,
      'state abbreviation': Schema.String,
      latitude: Schema.String,
    }),
  ),
})

interface FindLocationArgs {
  zip: string
  countryCode?: string
}

export const findLocation = (args: FindLocationArgs) =>
  HttpClient.get(`https://api.zippopotam.us/${args.countryCode}/${args.zip}`).pipe(
    Effect.flatMap(HttpClientResponse.schemaBodyJson(LocationSchema)),
    Effect.scoped,
    Effect.provide(FetchHttpClient.layer),
    Effect.retry({ times: 2 }),
    Effect.timeout('1 second'),
  )
