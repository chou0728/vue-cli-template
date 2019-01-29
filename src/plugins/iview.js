import Vue from 'vue'
import {
  Button,
  Icon,
  Card,
  Menu,
  Form,
  Input,
  FormItem,
  locale
} from 'iview'
import lang from 'iview/dist/locale/zh-TW'
import 'iview/dist/styles/iview.css'

locale(lang)

Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('Card', Card)
Vue.component('Menu', Menu)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
