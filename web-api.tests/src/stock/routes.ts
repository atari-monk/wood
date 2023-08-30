import { HttpMethod, IRouting } from 'atari-monk-api-tester-api'

export const getRoutes = (url: string, stockId?: string): IRouting => {
  return {
    baseUrl: url,
    endpoints: {
      createUserStock: {
        method: HttpMethod.POST,
        endpoint: 'stocks',
      },
      getAllStocks: {
        method: HttpMethod.GET,
        endpoint: 'stocks',
      },
      updateStock: {
        method: HttpMethod.PATCH,
        endpoint: `stocks/${stockId}`,
      },
      deleteStock: {
        method: HttpMethod.DELETE,
        endpoint: `stocks/${stockId}`,
      },
    },
  }
}
