import request from '../request.js'

export function test(params) {
  debugger
  return request({
    url: '/test/queryUserList', //接口路径
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    data: {
      ...params,
    }
  })
}