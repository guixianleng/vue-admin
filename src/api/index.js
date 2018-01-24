import fetch from '../utils/fetch'

export default{
  // 获取我的页面的后台数据
  baseTable (params) {
    return fetch({
      url: 'https://easy-mock.com/mock/59dc46f31de3d46fa94ccad9/admin/api/getTableList',
      method: 'GET',
      params
    })
  },
  baseTableList (params) {
    return fetch({
      url: '/people/baseTableList',
      params
    })
  },
  editableTableList (params) { // 可编辑列表
    return fetch({
      url: 'https://easy-mock.com/mock/59dc46f31de3d46fa94ccad9/admin/api/table/editableTable/List',
      params
    })
  },
  moreTableList (params) {
    return fetch({
      url: 'https://easy-mock.com/mock/59dc46f31de3d46fa94ccad9/admin/api/table/moreTable/list',
      params
    })
  },
  deleteMember (options, data) {
    return fetch({
      url: 'https://easy-mock.com/mock/59dc46f31de3d46fa94ccad9/admin/api/delete/member',
      method: 'POST',
      options,
      data
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
