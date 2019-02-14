<template>
    <div>
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
    </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default {
    data() {
        return {
            datas:''
        }
    },
    methods: {
        gotolist(id){
            this.$store.commit('editListid',id);
            localStorage.setItem("goodsid", id);
            this.$router.push({
                name: "detail",
                params: { id: id, name: "detail" }
            });
        }
    },
    created() {
        let _this=this;
        let val = this.$store.getters.getListname
        axios.get('http://localhost:3333/goodslist',{
              params:{
                check:3,
                val: val
              }
            }).then(function(response){
                    console.log(response);
                    // 将得到的数据放到vue中的data
                    _this.datas = response.data.data;
                })
                .catch(function(error){
                    console.log(error);
                });
    },
}
</script>

<style scoped>

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
