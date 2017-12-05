// 引入mockjs
import Mock from 'mockjs'

// 获取 mock.Random 对象

const Random = Mock.Random

// mock一组数据

const tableListData = function () {
  let list = []

  for (let i = 0; i < 20; i++) {
    let array = {
      address: Random.county(true), // Random.county(true)生成所属的省、市
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      birthday: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
      // age: new Date() - this.birthday
      // 'id|1': Number
    }
    list.push(array)
  }
  return {
    list: list
  }
}

// Mock.mock( url, post/get , 返回的数据)

export default Mock.mock('/people/tableList', 'get', tableListData)
