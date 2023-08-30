import { HttpMethod, IRouting } from 'atari-monk-api-tester-api'

export const getRoutes = (url: string, userId?: string): IRouting => {
  return {
    baseUrl: url,
    endpoints: {
      createUser: {
        method: HttpMethod.POST,
        endpoint: 'users',
      },
      getUsers: {
        method: HttpMethod.GET,
        endpoint: 'users',
      },
      updateUser: {
        method: HttpMethod.PATCH,
        endpoint: `users/${userId}`,
      },
      deleteUser: {
        method: HttpMethod.DELETE,
        endpoint: `users/${userId}`,
      },
    },
  }
}
