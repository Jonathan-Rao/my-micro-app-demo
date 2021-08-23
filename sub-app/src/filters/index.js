/* 如果接口返回字段为空，就显示默认值---*/
const emptyValue = function (value) {
  if (value === '' || value === null || value === undefined) {
    return '---'
  } else {
    return value
  }
}




export {
  emptyValue
}