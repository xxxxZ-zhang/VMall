import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Tab,
  Tabs,
  List,
  Sticky,
  Cell,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Card,
  SwipeCell,
  Button,
  Stepper,
  Dialog,
  TreeSelect
} from "vant"

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload, {
  loading: 'https://img.yzcdn.cn/vant/custom-empty-image.png'
})
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Sticky)
Vue.use(Cell)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Toast)
Vue.use(Card)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Stepper)
Vue.use(Dialog)
Vue.use(TreeSelect)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
