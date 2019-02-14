<template>
    <div>
        <div style="width:100%;height:44px;">
             <van-search @click="search" placeholder="请输入搜索关键词" v-model="value" />
        </div>
        
        <div class="left">
            <ul>
                <li 
                    :class="{ 'active': activeIndex === index}"  
                    @click="activate(index)"  
                    v-for="(item, index) in lists" 
                    :key="index" 
                    v-text="item"
                    >
                </li>
                <!-- <li>家居/家</li>
                <li>食品酒水</li>
                <li>个护化妆</li>
                <li>腕表珠宝</li>
                <li>母婴玩具</li> -->
            </ul>
        </div>
        <div class="right">
            <div v-show="activeIndex === index" v-for="(items, index) in imges" :key="index">
                <h3>云米厨房系列</h3>
                <ul>
                    <li>
                        <div class="pic">
                            <img :src="items" alt="">
                        </div>
                        <span>
                            云米蒸烤一体机
                        </span>
                    </li>
                    <li>
                        <div class="pic">
                            <img :src="items" alt="">
                        </div>
                        <span>
                            云米蒸烤一体机
                        </span>
                    </li>
                    <li>
                        <div class="pic">
                            <img :src="items" alt="">
                        </div>
                        <span>
                            云米蒸烤一体机
                        </span>
                    </li>
                    <li>
                        <div class="pic">
                            <img :src="items" alt="">
                        </div>
                        <span>
                            云米蒸烤一体机
                        </span>
                    </li>
                    <!-- <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> -->
                </ul>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue';`1`
import { Search } from 'vant';
Vue.use(Search);
export default {
    data(){
        return {
            value:'',
            lists:['家用电器','家居/家','食品酒水','个护化妆','腕表珠宝','母婴玩具'],
            imges:[require('../assets/images/bencaoshajun.jpg'),require('../assets/images/bingxiang.jpg'),require('../assets/images/chuyulaji.jpg'),
            require('../assets/images/dianfanguo.jpg'),require('../assets/images/hulianwangjingshui.jpg'),require('../assets/images/saodi.jpg')],
            activeIndex: 0,
        }
    },
    methods: {
        search(){
            this.$router.push({name:'search'});
        },
        activate(index){
            this.activeIndex = index;
        }
    },
}
</script>

<style scoped>
.van-search{
    width: 100%;
    z-index: 1000;
    position: fixed;
    top:0;
}
.left{
    width: 25%;
    float: left;
    position: fixed;
    min-height: 573px;
    background:#f3f5f7;
    overflow: hidden;
}
.left>ul{
    width: 100%;
}
.left>ul>li{
    padding: 1.3rem .8rem;
    box-sizing: border-box;
    font-size: 12px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
}
.left>ul .active{
    background: #fff;
    position: relative;
    color: #ec5151;
    border-right: none;
    border-left: 1px solid #ec5151;
}
.right{
    float: right;
    width: 75%;
    padding: .3125rem;
    margin-bottom: 50px;
    box-sizing: border-box;
}
.right>div>h3{
    font-size: 14px;
    color: #222;
    margin: 10px 0;
    font-weight: 400;
}
.right>div>ul{
    width: 100%;
    overflow: hidden;
}
.right>div>ul>li{
    width: 32%;
    margin-right: 5px;
    margin-bottom: 5px;
    float: left;

}
.right>div>ul>li:nth-child(3n){
    margin-right: 0px;
}
.right>div>ul>li .pic{
    width: 100%;
}
.right>div>ul>li>span{
    display: block;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;;
    color: #777;
}
.right>div>ul>li .pic>img{
    max-width: 100%;
    max-height: 100%;  
}
</style>