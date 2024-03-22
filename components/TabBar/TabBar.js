// components/TabBar/TabBar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        pagePath: '/pages/index/index',
        text: '餐厅',
        icon: "/assets/svg/shop.svg",
        selectedIconPath: '/assets/svg/shop-select.svg' 
       },
      {
        pagePath: '/pages/mine/mine',
        text:"我",
        iconPath: '/assets/svg/center.svg',
        selectedIconPath: '/assets/svg/center-select.svg'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabTap(e) {
      console.log(e)
    }
  }
})