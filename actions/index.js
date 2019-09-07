import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/v/1',
  timeout: 3000 // 3 sec
})

const rejectPromise = (responseError) => {
  const error = (responseError && responseError.response && responseError.response.data) ? responseError.response.data : responseError
  return Promise.reject(error)
}

export const getContents = async (req) => {
  const result = await axiosInstance.get('/content?Page=1')
    .then(response => response.data)
  return result
}

export const getContentById = async (id) => {
  const result = await axiosInstance.get(`/content?_id=${id}`)
    .then(response => response.data)
  return result
}

export const createContent = async (contentData) => {
  const result = await axiosInstance.post('/content', contentData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
  return result
}

export const updateContent = async (contentData) => {
  const result = await axiosInstance.put(`/content/${contentData._id}`, contentData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
  return result
}