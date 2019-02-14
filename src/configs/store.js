// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    // 实例化Vuex，创建一个仓库
    // 库
const store = new Vuex.Store({
        // 状态
        // 该库存数据的地方
        state: {
            listId: '',
            Listname: '',
            bool: false
        },
        // 修改数据的方法 真正改数据的操作
        mutations: {
            editListid(state, id) {
                state.listId = id
            },
            editListname(state, val) {
                state.Listname = val
            },
            editbool(state, bool) {
                state.bool = bool
            }
        },
        // 获取数据的方法
        getters: {
            getListid(state) {
                return state.listId
            },
            getListname(state) {
                return state.Listname
            },
            getbool(state) {
                return state.bool
            }
        },
        // 异步的方法放这里
        // 触发多个数据的改变才使用
        // 触发mutations，其实就是把刚才commit从组件放出来，换个地方放到actions
        actions: {}
    })
    // 暴露store仓库到`main.js`的根容器里面
    // console.log(Vuex,store)
export default store