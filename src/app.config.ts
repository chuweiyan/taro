export default {
  pages: [
    'pages/index/index',
    'pages/user/user',
    'pages/stu/stu',
  ],
  tabBar: {
    backgroundColor: '#FF0000',
    selectedColor: '#FFFFFF',
    color: '#000',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/user/user',
      text: '用户'
    }, {
      pagePath: 'pages/stu/stu',
      text: '学生'
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
