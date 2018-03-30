import axios from 'axios'
import ApiUrl from './urls'

const instance = axios.create({
  baseURL: process.env.REACT_APP_HTTP_API,
  withCredentials: false
})

const client = {
  projects: () => instance.get(ApiUrl.projects()),

  create: project => instance.get(ApiUrl.create(project)),

  reference: (project, config) =>
    instance.post(ApiUrl.reference(project), {
      config: config
    }),

  test: (project, config) =>
    instance.post(ApiUrl.test(project), {
      config: config
    }),

  approve: (project, config) =>
    instance.post(ApiUrl.approve(project), {
      config: config
    }),

  report: (project, config) =>
    instance.post(ApiUrl.approve(project), {
      config: config
    })
}

export default client
