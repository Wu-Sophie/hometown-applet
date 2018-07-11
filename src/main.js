import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/strategy/main',
      'pages/fruits/main',
      'pages/position/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '老君井乡宣传站',
      navigationBarTextStyle: 'black',
      backgroundColor: '#F3F7F7'
    },
    tabBar: {
      backgroundColor: '#FFF',
      color: '#A1ABAC',
      selectedColor: '#1C2021',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: '/static/images/location.png',
          selectedIconPath: '/static/images/location.png',
          text: '自然环境'
        },
        {
          pagePath: 'pages/strategy/main',
          iconPath: '/static/images/location.png',
          selectedIconPath: '/static/images/location.png',
          text: '周游攻略'
        },
        {
          pagePath: 'pages/fruits/main',
          iconPath: '/static/images/location.png',
          selectedIconPath: '/static/images/location.png',
          text: '时新水果'
        },
        {
          pagePath: 'pages/position/main',
          iconPath: '/static/images/location.png',
          selectedIconPath: '/static/images/location.png',
          text: '地理位置'
        }
      ]
    }
  }
}
