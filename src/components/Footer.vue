<template>
    <div>
        <van-tabbar v-model="active" active-color="#FF0032">
            <van-tabbar-item @click="shouye" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item @click="sort" icon="bars" >分类</van-tabbar-item>
            <!-- <van-tabbar-item icon="search"  >搜索</van-tabbar-item> -->
            <van-tabbar-item @click="Tiaozhuang" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item  @click="mine" icon="friends-o" >我</van-tabbar-item>   
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
    },
    methods: {
        Tiaozhuang(){
            this.$router.push({name:'cart'})
        },
        shouye(){
            this.$router.push({name:'home'})
        },
        sort(){
            this.$router.push({name:'sort'})
        },
        mine(){
            this.$router.push({name:'mine'})
        }
    },
}
</script>

<style scoped>
    
</style>
