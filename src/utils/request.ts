import axios, { AxiosResponse, AxiosError } from 'axios'

import { ElLoading } from 'element-plus'

let loadingInstance: any = null

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

instance.interceptors.request.use((config) => {
  const options = {
    lock: true,
    text: 'loading...',
  }
  loadingInstance = ElLoading.service(options)
  return config
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      const code = response.data.code
      if (code === 200) {
        loadingInstance.close()
        return Promise.resolve(response.data)
      }
    }
    loadingInstance.close()
    return Promise.reject(response.data)
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

export default instance
