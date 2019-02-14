import Vue from 'vue';
// 引入路由模块
import App from '../App';
import Cart from '../components/Cart.vue';
import Home from '../components/Home.vue';
import Mine from '../components/Mine.vue';
import Sort from '../components/Sort.vue';
import Detail from '../components/Detail.vue';
import Search from '../components/Search.vue';
import Specialty from '../lists/Specialty.vue';
import Promotion from '../lists/Promotion.vue';
import Material from '../lists/Material.vue';
import Relaxation from '../lists/Relaxation.vue';
import Appliances from '../lists/Appliances.vue';
import Searchlist from '../lists/Searchlist.vue';
import VueRouter from 'vue-router';
// 显式安装该模块
Vue.use(VueRouter);



const routes = [{
        path: '/app',
        name: 'app',
        component: App,
        children: [{
                path: "/cart",
                name: 'cart',
                component: Cart,
            },
            {
                path: "/home",
                name: 'home',
                component: Home,
            },
            {
                path: "/mine",
                name: 'mine',
                component: Mine,
            },
            {
                path: "/sort",
                name: 'sort',
                component: Sort,
            }
        ]
    },
    {
        path: '/specialty',
        name: 'specialty',
        component: Specialty,
    },
    {
        path: '/promotion',
        name: 'promotion',
        component: Promotion,
    },
    {
        path: '/material',
        name: 'material',
        component: Material,
    },
    {
        path: '/relaxation',
        name: 'relaxation',
        component: Relaxation,
    },
    {
        path: '/appliances',
        name: 'appliances',
        component: Appliances,
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail,
    },
    {
        path: '/searchlist',
        name: 'searchlist',
        component: Searchlist,
    },
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    }

]


// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes: routes // (缩写) 相当于 routes: routes
})




export default router