import { expect } from 'chai'
import { ApiTester } from 'atari-monk-api-tester-lib'
import { getRoutes } from './routes'

describe('Test Stock endpoints', () => {
  const port = '3001'
  const url = `http://localhost:${port}/api/v1`
  const stock = {
    _id: '',
    stockId: '666',
    width: 6,
    depth: 6.6,
    height: 66,
    count: 66,
    description: 'test-description',
  }
  const stockPatch = {
    ...stock,
    stockId: 999,
    width: 9,
    depth: 9.9,
    height: 99,
    count: 99,
    description: 'test-description-patch',
  }
  const tester = new ApiTester()
  tester.routing = getRoutes(url)

  it('should test POST request successfully', async () => {
    try {
      const response = await tester.post('createUserStock', stock)

      stock._id = response.data._id as string
      stockPatch._id = stock._id
      tester.routing = getRoutes(url, stock._id)

      expect(response.status).to.equal(201)
      expect(response.data).to.include(stock)
    } catch (error) {
      console.log(error)
    }
  })
  /*
  it('should test GET request successfully', async () => {
    const key = 'getUserProjectById'

    const response = await tester.get(key)

    expect(response.status).to.equal(200)
    expect(response.data).to.include(project)
  })

  it('should test GET request successfully', async () => {
    const key = 'getUserProjects'

    const response = await tester.get(key)

    expect(response.status).to.equal(200)
    const projectDb = response.data.find((p: any) => {
      return p._id === project._id
    })
    expect(projectDb).to.include(project)
  })

  it('should test GET request successfully', async () => {
    const key = 'getAllProjects'

    const response = await tester.get(key)

    expect(response.status).to.equal(200)
    const projectDb = response.data.find((p: any) => {
      return p._id === project._id
    })
    expect(projectDb).to.include(project)
  })

  it('should test PATCH request successfully', async () => {
    const key = 'updateProject'

    const response = await tester.patch(key, projectPatch)

    expect(response.status).to.equal(200)
    expect(response.data).to.include(projectPatch)
  })
*/
  it('should test DELETE request successfully', async () => {
    const key = 'deleteStock'

    const response = await tester.delete(key)

    expect(response.status).to.equal(200)
  })
})
