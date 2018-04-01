import axios from 'axios'
import ApiUrl from './urls'

const instance = axios.create({
  baseURL: process.env.REACT_APP_HTTP_API,
  withCredentials: false
})

const client = {
  projects: () => instance.get(ApiUrl.projects()),

  project: project => instance.get(ApiUrl.project(project)),

  create: project =>
    instance.post(ApiUrl.create(project.name), { description: project.description }),

  update: config => instance.post(ApiUrl.update(config.id), { config: config }),

  reference: project => instance.get(ApiUrl.reference(project)),

  test: project => instance.get(ApiUrl.test(project)),

  approve: project => instance.get(ApiUrl.approve(project)),

  report: project => instance.get(ApiUrl.approve(project))
}

export default client
