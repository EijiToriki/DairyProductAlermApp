// 未入力チェック（文字列）
const emptyCheck = (val) => {
  if(val === ""){
    return -1
  }else{
    return 0
  }
}

// 数値チェック
const isNumeric = (val) => {
  if(/^[1-9][0-9]*$/.test(val)){
    return 0
  }else{
    return -1
  }
}



export {emptyCheck, initialValCheck, isNumeric}