function toggleCase(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, ($0,$1,$2) =>{//必须写$0表示全部匹配
    return `${$1.toUpperCase()}${$2.toLowerCase()}`
  })
}
console.log(toggleCase('AajdiwADWdjiaADW123__12jdiwa_adw__A2DW'))
