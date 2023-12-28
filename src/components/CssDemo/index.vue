<template>
<div class="css-demo">
    <div>我是css-demo</div>
    <div class="box" @click="updateStyle">{{ text }}</div>
</div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
let bgColor = ref('red');
let textStyle = reactive({
    color: '#fff'
})
let text = ref('样式修改前');
// 修改样式
const updateStyle = () => {
    bgColor.value = 'blue'
    textStyle.color = 'red'
    text.value = '样式修改后'
}
</script>
<style scoped lang="scss">
.css-demo {
    .box {
        width: 100px;
        height: 100px;
        border: 1px solid red;
        background: v-bind(bgColor); // 通过v-bind实现背景响应式更新
        color: v-bind('textStyle.color'); // 如果绑定的是一个对象, v-bind中的value需要用引号引起来
    }
}
</style>
