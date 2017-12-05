//  全局的filter

// 时间戳转日期格式
function FormatDate (date, type) {
  if (!date) return ''
  date = !date ? new Date() : date
  date = typeof date === 'number' ? new Date(date) : date
  type = type || 'yyyy-MM-dd HH:mm:ss'
  let obj = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  }
  let week = ['天', '一', '二', '三', '四', '五', '六']
  for (let i in obj) {
    type = type.replace(new RegExp(i + '+', 'g'), function (m) {
      let val = obj[i] + ''
      if (i === 'w') return (m.length > 2 ? '星期' : '周') + week[val]
      for (let j = 0, len = val.length; j < m.length - len; j++) val = '0' + val
      return m.length === 1 ? val : val.substring(val.length - m.length)
    })
  }
  return type
}

function formatMoney (num) { // 从后端获取的单位为分，不是元
  num = num.toString().replace(/\$|,/g, '') / 100
  if (isNaN(num)) {
    num = '0'
  }
  let sign = (Number(num) === (num = Math.abs(num)))
  num = Math.floor(num * 100 + 0.50000000001)
  let cents = num % 100
  num = Math.floor(num / 100).toString()
  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  return '￥' + (((sign) ? '' : '-') + num + '.' + cents)
}

function noPreformatMoney (num) { // 从后端获取的单位为分，不是元
  num = num.toString().replace(/\$|,/g, '') / 100
  if (isNaN(num)) {
    num = '0'
  }
  let sign = (Number(num) === (num = Math.abs(num)))
  num = Math.floor(num * 100 + 0.50000000001)
  let cents = num % 100
  num = Math.floor(num / 100).toString()
  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  return ((sign) ? '' : '-') + num + '.' + cents
}

function getWeekList (weekStr) { // code数组转周几
  let weekArr = weekStr.split(',').sort()
  let weekDayArr = []
  for (let weekDay of weekArr) {
    switch (weekDay) {
      case '1':
        weekDayArr.push('一')
        break
      case '2':
        weekDayArr.push('二')
        break
      case '3':
        weekDayArr.push('三')
        break
      case '4':
        weekDayArr.push('四')
        break
      case '5':
        weekDayArr.push('五')
        break
      case '6':
        weekDayArr.push('六')
        break
      case '7':
        weekDayArr.push('日')
        break
    }
  }
  return '每周' + weekDayArr.join('、')
}

function getWeekDay (weekCode) { // code转周几
  let weekDay = ''
  switch (weekCode) {
    case 1:
      weekDay = '周一'
      break
    case 2:
      weekDay = '周二'
      break
    case 3:
      weekDay = '周三'
      break
    case 4:
      weekDay = '周四'
      break
    case 5:
      weekDay = '周五'
      break
    case 6:
      weekDay = '周六'
      break
    case 7:
      weekDay = '周日'
      break
  }
  return weekDay
}

export default {
  FormatDate,
  formatMoney,
  noPreformatMoney,
  getWeekList,
  getWeekDay
}
