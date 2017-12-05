import fetch from '../utils/fetch'

export default{
  // 获取我的页面的后台数据
  mineBaseMsgApi (params) {
    return fetch({
      url: '/people/tableList',
      method: 'GET',
      params
    })
  },
  getUploadImg (data, options) {
    return fetch({
      url: 'https://easy-mock.com/mock/5a1292eb46ed8d690fdda6c5/example/upload',
      method: 'POST',
      options,
      data
    })
  }
}
