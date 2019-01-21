<template>
    <div>
        <van-tabbar v-model="active" active-color="#FF0032">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="bars" >分类</van-tabbar-item>
            <!-- <van-tabbar-item icon="search"  >搜索</van-tabbar-item> -->
            <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o" >我</van-tabbar-item>   
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {


    data(){
        return {
            active:0,

        }
    }
}
</script>

<style scoped>
    
</style>
