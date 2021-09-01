import request from '@/utils/request'

export function getImage(data) {
    return request({
        // url: `https://localhost:9576/api/getImage?index=${data}`,
        url: `http://localhost:3000/api/getImage?index=${data}`,
        method: 'post', // 测试，用 post 传递
        responseType: 'blob'
    })
}