<template>
    <div>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox name='' v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import { SubmitBar,Checkbox} from 'vant';
Vue.use(SubmitBar).use(Checkbox);
export default {
    data() {
        return {
            checked:false
        }
    },
    methods: {
        onSubmit(){

        }
    },
}
</script>

<style scoped>

</style>
