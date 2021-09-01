import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})
  
service.interceptors.response.use(response => {
    console.log(response)
    return response.data
}, error => console.log(error))

export default service