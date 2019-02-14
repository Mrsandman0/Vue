<template>
    <div>
        <!-- 头部返回 -->
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <!-- 详情信息 -->
        <div class="detail">
            <div class="img-box">
                <div class="detail-img">
                    <img :src="datas.proImg" alt="">
                </div> 
            </div>
            <div class="detail-title">
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;{{datas.proName}}&nbsp;&nbsp;{{datas.slogan}}</h4>
                <p>爆款热销 高性价比套装</p>
                <span>
                    <em>￥</em>
                    <b>{{datas.proPrice}}</b>
                </span>
            </div>
            
            <div class="clubDisc" >
                <span>会员下单再享99折,可省{{`${(datas.proPrice*0.01).toFixed(2)}`}}元</span>
            </div>
            
            <div class="detail_fourth">
                <span>数量</span>
                <span class="detail_fourth_sub" @click="sub">-</span>
                <input type="text" v-model="value" />
                <span class="detail_fourth_add" @click="add">+</span>
            </div>
            <div class="detailsSecurityBox">
				<div class="detailsSecurity" style="height: auto;">
                    <span><i style="background: url('https://img09.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0; background-size: 13px 13px;"></i>正品保障</span>
                    <span><i style="background: url('https://img07.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0; background-size: 13px 13px;"></i>满100包邮</span>
                    <span><i style="background: url('https://img08.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; background-size: 13px 13px;"></i>7天退换</span>
                    <span><i style="background: url('https://img07.jiuxian.com/bill/2016/1129/311cd9577b674fa783222f1c9f373cfd.png') no-repeat 0 0; background-size: 13px 13px;"></i>酒仙发货&amp;售后</span>
                </div>
			</div>
        </div>

        <!-- 底部购物车 -->
        <van-goods-action>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-mini-btn
                info=""
                icon="cart-o"
                text="购物车"
            />
            <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
            />
            <van-goods-action-big-btn text="加入购物车" />
            <van-goods-action-big-btn
                primary
                text="立即购买"
            />
        </van-goods-action>
    </div>
</template>

<script>
import axios from 'axios';
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
import Vue from "vue";
Vue.use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);

import { NavBar } from 'vant';
Vue.use(NavBar);
export default {
    data() {
        return {
            id:null,
            datas:'',
            value:1
        }
    },
    methods: {
         onClickLeft() {
            this.$router.go(-1);
            },
        sub(){
                let val=this.value;
                if(val<=1){
                   this.value=1; 
                }else{
                    this.value=val-1
                }
            },
        add(){
            this.value+=1;
        }
    },
    created() {
        let _this = this;
        // console.log(this.$router.params.id)
       let id=localStorage.getItem("goodsid");
       axios.get('http://localhost:3333/goodslist',{
                params:{
                    check:2,
                    proId:id
                }
            })
                .then(function(response){
                    _this.datas=response.data.data;
                })
                .catch(function(error){
                    console.log(error);
                });
    },
}
</script>

<style >
.van-nav-bar{
    background: #de4943;
    /* width: 100%; */
}
.van-nav-bar .van-icon,.van-nav-bar__title,.van-nav-bar__text{
    color: #fff;
}

.detail>.img-box{
    width: 100%;
    height: 320px;
    margin-bottom: 10px;
}
.detail>.img-box>.detail-img{
    width: 100%;
    height: 320px;
    padding:0 27.5px;
    box-sizing: border-box;
}
.detail>.img-box>.detail-img>img{
    width: 100%;
    height: 100%;
}
.detail>.detail-title{
    margin-bottom: 8px;
}
.detail>.detail-title>h4{
    font-size: 15px;
    margin: 0 10px;
    line-height: 1.5;
    font-weight: 500;
    color: #252525;
    margin-bottom: 8px;
}
.detail>.detail-title>p{
    margin: 0 10px;
    font-size: 13px;
    line-height: 1.5;
    color: #fc5a5a;
    margin-bottom: 8px;
}
.detail>.detail-title>span{
    display: block;
    margin: 0 10px;
}
.detail>.detail-title>span>em{
    font-size: 14px;
    color: #fc5a5a;
    padding-right: 2px;
}
.detail>.detail-title>span>b{
    font-weight: normal;
    font-size: 19px;
    color: #fc5a5a;
}   
.detail>.clubDisc{
    margin-bottom: 8px;
}
.detail>.clubDisc span {
    font-size: 12px;
    color: #666;
    margin: 0 10px; 
    
}

.detail > .detail_fourth {
  width:100%;
  height: 32px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 8px;
}

.detail >  .detail_fourth > span:nth-child(1) {
  display: inline-block;
  color: #999;
  height: 30px;
  width: 50px;
  line-height: 30px;
  font-size: 14px;
}

.detail >  .detail_fourth > .detail_fourth_sub, .detail_fourth_add {
  display: inline-block;
  color: #696967;
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  line-height: 28px;
}

.detail >  .detail_fourth input {
  width: 40px;
  height: 28px;
  font-size: 16px;
  color: #212121;
  text-align: center;
  line-height: 28px;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  transform: translateY(-3px);
}

/* .clubDisc {
height: 20px;
line-height: 20px;
margin-bottom: 5px;

font-size: 0;
font-family: "微软雅黑";
} */

/* .clubDisc .clubImg {
    background-size: 29px 11px;
    width: 29px;
    height: 11px;
    overflow: hidden;
    margin-right: 5px;
} */
/* .clubDisc span {
    font-size: 12px;
    color: #666;
} */
.detailsSecurity{
    margin-left: 8px;
}
.detailsSecurity span {
    float: left;
    color: #666;
    font-size: 12px;
    display: block;
    height: 20px;
    margin-right: 15px;
}
.detailsSecurity i {
    width: 13px;
    height: 13px;
    display: block;
    float: left;
    margin: 3px 3px 0 0;
}
</style>
