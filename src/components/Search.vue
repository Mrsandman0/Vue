<template>
    <div>
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            >
            <div slot="action" @click="onSearch(value)">搜索</div>
        </van-search>

        <div class="list">
            <p>热门搜索</p>
            <ul>
                <li>芒果</li>
                <li>猕猴桃</li>
                <li>火龙果</li>
                <li>百香果</li>
                <li>砂糖橘</li>
                <li>沙田柚</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        onSearch(val){
            if(val!==''){
                this.$store.commit('editListname',val);
                this.$router.push({
                        name: "searchlist",
                        params: { val: val, name: "searchlist" }
                    });
            }
            
        }
    }
}
</script>

<style scoped>
    .list>p{
        font-size: 1.25rem;
        color: #999;
        padding:0 .9375rem; 
        box-sizing: border-box;
    }
    .list>ul{
        width: 100%;
        padding:0 .9375rem; 
        box-sizing: border-box;
        overflow: hidden;
    }
    .list>ul>li{
        float: left;
        width: 30%;
        text-align: center;
        margin:.3125rem;
        height: 3.125rem;
        line-height: 3.125rem;
        border-radius: 2px;
        background: #f2f2f2;
    }
</style>