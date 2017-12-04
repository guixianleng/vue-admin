// 引入mockjs

import Mock from 'mockjs'

/**
 * Mock.mock()有几种方式
 * Mock.mock(template)：根据数据模板生成模拟数据。
 * Mock.mock(rurl, template)：记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
 * Mock.mock(rurl, function(options))：记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回
 * Mock.mock(rurl, rtype, template)：记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
 * Mock.mock(rurl, rtype, function(options))：记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
 */

 /**
  * 参数说明：
  *参数 rurl：可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
  *参数 rtype：可选。表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等
  *参数 template：可选。表示数据模板，可以是对象或字符串
  *参数 function(options)：可选。表示用于生成响应数据的函数
  *参数 options：指向本次请求的 Ajax 选项集
  */

// const data = {
//   'title': 'Syntax Demo',
//   'object1|2-4': {
//     '110000': '北京市',
//     '120000': '天津市',
//     '130000': '河北省',
//     '140000': '山西省'
//   },
//   'object2|2': {
//     '310000': '上海市',
//     '320000': '江苏省',
//     '330000': '浙江省',
//     '340000': '安徽省'
//   },

//   'function': function () {
//     return this.title
//   }
// }

// export default Mock.mock(data)

// 获取 mock.Random 对象

const Random = Mock.Random

// mock一组数据

const produceNewsData = function () {
  let articles = []

  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}

// Mock.mock( url, post/get , 返回的数据)；

export default Mock.mock('/news/index', 'post', produceNewsData)
