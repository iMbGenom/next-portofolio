import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/v/1',
    timeout: 3000 // 3 sec
})

const rejectPromise = (responseError) => {
    const error = (responseError && responseError.response && responseError.response.data) ? responseError.response.data : error = responseError

    return Promise.reject(error)
}

export const getContents = async(req) => {
    return await axiosInstance.get('/content?Page=1')
                .then(response => response.data)
}

export const getContentById = async(id) => {
    return await axiosInstance.get(`/content?_id=${id}`)
                .then(response => response.data)
}

export const createContent = async(contentData) => {
    return await axiosInstance.post('/content', contentData)
                .then(response => response.data)
                .catch(error => rejectPromise(error))
}