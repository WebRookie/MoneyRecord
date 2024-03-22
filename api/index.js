
// 以下环境其实可以使用app globalData里的值

// 测试地址
// export const BASE_URL = 'https://www.han5j.com/txrlt_wechat/txrlthwj'
// 正式地址
// export const BASE_URL = 'https://www.cambrianer.cn/txrlt/txrlthwj'
// 客户地址环境
// export const BASE_URL = 'https://www.gs389.top/txrlt/txrlthwj'
// 本地测试地址
export const BASE_URL =  'http://127.0.0.1:8101/'



export function get(url,data = {}){
    return new Promise((resolve,reject) =>{
        wx.request({
          url: BASE_URL + url,
          data:data,
          header:{
              'content-type':'application/json',
          },
          method:'GET',
          success:res => {
              resolve(res);
          },
          fail:error => {
              reject(error);
          }
        })
    })
}

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        wx.request({
          url: BASE_URL + url,
          data:data,
          header:{
              'content-type':'application/json'
          },
          method:'post',
          success:res =>{
              resolve(res)
          },
          fail:error => {
              reject(error);
          }
        })                                           
    }) 
}

export function filePost(url,data ={}){
  return new Promise((resolve,reject) => {
    wx.request({
      url: BASE_URL + url,
      data:data,
      responseType:'arraybuffer',
      method:'post',
      success:res =>{
          resolve(res)
      },
      fail:error => {
          reject(error);
      }
    })                                           
}) 
}

export function fileUpload(url, filePath){
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      filePath: filePath,
      name: 'files',
      url: BASE_URL + url,
      success: res => {
        wx.hideLoading({ })
        const data = JSON.parse(res.data)
        resolve(data)
      },
      fail: err => { 
        reject(err)
      }
    })
  })
}