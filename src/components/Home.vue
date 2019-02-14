<template>
  <div>
    <!-- 搜索 -->
    <van-search @click="search" placeholder="请输入搜索关键词" v-model="value"/>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#58bc58">
      <van-swipe-item>
        <img src="../assets/g1.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/g3.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/laoxie.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/malin.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/tiantian.jpg">
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <div>
      <nav>
        <section class="list" style="width: 20%;">
          <img class="icon" @click="specialty" data-src src="../assets/home-pic/special.png">
          <!---->
          <div class="con">广西特产</div>
          <i class="iconfont icon-right-arrow"></i>
        </section>
        <section class="list" style="width: 20%;">
          <img class="icon" @click="promotion"  data-src src="../assets/home-pic/promotion.png">
          <!---->
          <div class="con">促销活动</div>
          <i class="iconfont icon-right-arrow"></i>
        </section>
        <section class="list" style="width: 20%;">
          <img class="icon"  @click="material"  data-src src="../assets/home-pic/fuel.jpg">
          <!---->
          <div class="con">柴米油盐</div>
          <i class="iconfont icon-right-arrow"></i>
        </section>
        <section class="list" style="width: 20%;">
          <img class="icon" @click="relaxation" data-src src="../assets/home-pic/snack.jpg">
          <!---->
          <div class="con">休闲零食</div>
          <i class="iconfont icon-right-arrow"></i>
        </section>
        <section class="list" style="width: 20%;">
          <img class="icon"  @click="appliances"  data-src src="../assets/home-pic/appliances.png">
          <!---->
          <div class="con">全屋家电</div>
          <i class="iconfont icon-right-arrow"></i>
        </section>
      </nav>
    </div>
    <!-- 商城公告 -->
    <van-notice-bar
      :text="text"
      left-icon="volume-o"
      background="#fff"
      :speed="50"
    />
    <!-- 列表 -->
    <Loading></Loading>
    <div class="list">
      <ul>
        <!-- v-for="items in datas.killProList" :key="items.actId" -->
        <li v-for="(items,index) in datas" :key="index" @click="gotolist(items.proId)"> 
          <div class="img">
            <img  :src="items.proImg" alt="">
          </div>
          <div class="title">
            <p>{{items.proName}}</p>
            <span>￥{{items.proPrice}}</span>
            <div>
              <span>市场价:</span>
              <span><del>￥{{items.jxPrice}}</del></span>
            </div>
          </div>
        </li>  
      </ul>
    </div>
    <div style="width:100%;height:50px"></div>
  </div>
</template>

<script>
import Loading from './Loading'
import Vue from "vue";
import axios from 'axios';
import { NoticeBar } from "vant";
Vue.use(NoticeBar);
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
import { Search } from "vant";
Vue.use(Search);

export default {
  data() {
    return {
      value: "",
      datas:'',
      text:'本公司卖的酒绝对的假酒，真一陪十，并且邮费由本公司承担',
      len:''
    };
  },
  components:{
    Loading
  },
  methods: {
    onChange() {},
    specialty(){
       this.$router.push({name:'specialty'})
    },
    promotion(){
      this.$router.push({name:'promotion'})
    },
    material(){
      this.$router.push({name:'material'})
    },
    relaxation(){
      this.$router.push({name:'relaxation'})
    },
    appliances(){
      this.$router.push({name:'appliances'})
    },
    search(){
      this.$router.push({name:'search'})
    },

    gotolist(id){
      console.log(this)
      this.$store.commit('editListid',id);
      localStorage.setItem("goodsid", id);
      this.$router.push({
        name: "detail",
        params: { id: id, name: "detail" }
      });
    }
   
  },
  // created() {
  //   // console.log(this)
  //     let data= (async function(){
  //          let data =await axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1548157245429&pagenum=1&tabnum=1"); 
  //          let datas=data.data;
  //          return datas
  //     })().then(result => {
  //       console.log(result)
  //           this.datas=result;
  //       });                                                                      
  // },

  created(){
            // 缓存指针
            let _this = this;
            // 设置一个开关来避免重负请求数据
            axios.interceptors.request.use(function (config){
               // 处理请求之前的配置
                _this.$store.commit('editbool',true);
               return config;
               }, function (error){
               // 请求失败的处理
                _this.$store.commit('editbool',false);
               return Promise.reject(error);
               });
              // 响应拦截（配置请求回来的信息）
              axios.interceptors.response.use(function (response){
               // 处理响应数据
                _this.$store.commit('editbool',false);
               return response;
               }, function (error){
               // 处理响应失败
                _this.$store.commit('editbool',false);
               return Promise.reject(error);
               });
            let sw = true;
            // 此处使用node做了代理
            let curr=1;
            axios.get('http://localhost:3333/goodslist',{
              params:{
                check:1,
                curr: curr,
                nums: 10
              }
            }).then(function(response){
                    console.log(response);
                    // 将得到的数据放到vue中的data
                    _this.len=Math.ceil(response.data.count/10);
                    console.log(_this.len)
                    _this.datas = response.data.data;
                })
                .catch(function(error){
                    console.log(error);
                });

            // 注册scroll事件并监听
            
            window.addEventListener('scroll',function(){
              // console.log(_this)
                // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
                // console.log(document.body.scrollTop); // 滚动高度
                // console.log(document.body.offsetHeight); // 文档高度
                // 判断是否滚动到底部
                // console.log(document.documentElement.scrollTop);滚动高
                if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) {
                    // console.log(sw);
                    // 如果开关打开则加载数据
                    curr++;
                    if(sw==true&&_this.len>=curr){
                        // _this.$store.commit('editbool',true);
                        // 将开关关闭
                        sw = false;
                        axios.get('http://localhost:3333/goodslist',{
                            params:{
                              check:1,
                              curr: curr,
                              nums: 10
                            }
                          }).then(function(response){
                                console.log(response);
                                // 将新获取的数据push到vue中的data，就会反应到视图中了
                                response.data.data.forEach(function(val,index){
                                    _this.datas.push(val);
                                    // console.log(val);
                                });
                                // console.log(_this.datas);
                                // 数据更新完毕，将开关打开
                                sw = true;
                                // _this.$store.commit('editbool',false);
                            })
                            .catch(function(error){
                                console.log(error);
                            });   
                    }
                }
                
            });
           
        }
}
</script>

<style scoped>
.van-search{
  width: 100%;
  opacity: 0.95;
  z-index: 1000;
  position: fixed;
  top:0;
}
.van-swipe-item img {
  width: 100%;
  height: 12.5rem;
}
nav {
  overflow: hidden;
}
nav > section {
  float: left;
  overflow: hidden;
  text-align: center;
  font-size: .875rem;
}
nav > section > img {
  width: 100%;
  height: auto;
}

.list>ul{
  width:100%; 
  overflow: hidden;
}
.list>ul>li{
  border: .0625rem solid #d8d8d8;
  padding: .3125rem;
  width: 50%;
  float: left;
  box-sizing: border-box;
}
.list>ul>li>.title>p{
  font-size: 14px;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.list>ul>li>.title>span{
  margin-left: 5px;
  font-size: 18px ;
  color: #ec5151;
}
.list>ul>li>.title>div{
  margin-left: 5px;
}
.list>ul>li>.title>div>span:nth-child(1){
  font-size: 14px ; 
  color: rgb(170, 170, 170);   
}
.list>ul>li>.title>div>span:nth-child(2){
  color: rgb(170, 170, 170);
}
.list>ul>li>.img{
  width: 100%;
}
.list>ul>li>.img>img{
  max-width: 100%;
  max-height: 100%;
}
</style>