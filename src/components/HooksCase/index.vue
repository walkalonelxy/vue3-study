<template>
<div class="hooks-case" v-resize="getBoxStatus">
    <img id="img" src="../../assets/imgs/a.png" alt="">
    <img :src="url" alt="">
</div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted} from 'vue';
import { useBase64 } from '@/hooks';
// import useResize from 'v-resize-lxy';
let url = ref<string>('');
useBase64({ el: '#img' }).then(res => {
    url.value = res.base64
})
const getBoxStatus = (val: any) => {
    console.log('vvv', val);
    
}
/* onMounted(() => {
    // 自定义hook的方式使用
    useResize(document.querySelector('.hooks-case') as HTMLElement, val => {
        console.log('val', val);
    })
}) */
</script>
<style scoped lang="scss">
.hooks-case {
    resize: both;
    border: 1px solid red;
    overflow: hidden;
    width: 70px;
    img {
        width: 30px;
        height: 50px;
    }
}
</style>
