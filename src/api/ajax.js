/*
ajax请求模块函数
 */
import axios from 'axios'

export default function ajax(url='', data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据 =》 query相当于get请求，params相当于post请求
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}