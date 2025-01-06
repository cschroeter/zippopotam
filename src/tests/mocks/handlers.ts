import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.zippopotam.us/us/90210', () => {
    return HttpResponse.json({
      'post code': '90210',
      country: 'United States',
      'country abbreviation': 'US',
      places: [
        {
          'place name': 'Beverly Hills',
          longitude: '-118.4065',
          state: 'California',
          'state abbreviation': 'CA',
          latitude: '34.0901',
        },
      ],
    })
  }),

  http.get('https://api.zippopotam.us/de/76829', () => {
    return HttpResponse.json({
      'post code': '76829',
      country: 'Germany',
      'country abbreviation': 'DE',
      places: [
        {
          'place name': 'Ranschbach',
          longitude: '8.0286',
          state: 'Rheinland-Pfalz',
          'state abbreviation': 'RP',
          latitude: '49.1958',
        },
        {
          'place name': 'Leinsweiler',
          longitude: '8.0192',
          state: 'Rheinland-Pfalz',
          'state abbreviation': 'RP',
          latitude: '49.1833',
        },
        {
          'place name': 'Landau in der Pfalz',
          longitude: '8.0987',
          state: 'Rheinland-Pfalz',
          'state abbreviation': 'RP',
          latitude: '49.194',
        },
      ],
    })
  }),
]
