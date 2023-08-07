var name = prompt('请输入你的姓名')
if (name == '苟冰冰') {
  alert('亲爱的' + name + '大宝贝欢迎使用阿超定制网')
}
else {
  alert(name + '你算个啥,滚,有多远滚多远!!!')
  var g = document.querySelector('a')
  g.onmouseover = function () {
    g.href = 'gun.html'
  }
}
