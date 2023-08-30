import { HttpMethod, IRouting } from 'atari-monk-api-tester-api'

export const getRoutes = (url: string, stockId?: string): IRouting => {
  return {
    baseUrl: url,
    endpoints: {
      createUserStock: {
        method: HttpMethod.POST,
        endpoint: 'stocks',
      },
      /*
      getUserProjectById: {
        method: HttpMethod.GET,
        endpoint: `projects/${projectId}?userId=${userId}`,
      },
      getUserProjects: {
        method: HttpMethod.GET,
        endpoint: `projects/user?userId=${userId}`,
      },
      getAllProjects: {
        method: HttpMethod.GET,
        endpoint: 'projects/all',
      },
      updateProject: {
        method: HttpMethod.PATCH,
        endpoint: `projects/${projectId}`,
      },
      */
      deleteStock: {
        method: HttpMethod.DELETE,
        endpoint: `stocks/${stockId}`,
      },
    },
  }
}
