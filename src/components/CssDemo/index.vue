<template>
<div :class="[$style['css-demo']]">
    <div>我是css-demo1</div>
    <!-- 添加多个class 数组形式 -->
    <div :class="[$style.text, $style.bg]">class对象默认使用$style作为变量名</div>
    <!-- 添加多个class 对象形式 -->
    <div :class="{[$style.text]: true}">class对象默认使用$style作为变量名</div>
</div>
<div :class="custom['css-demo']">
    <div @click="test">我是css-demo2</div>
    <div :class="custom.text">class对象使用自定义变量名</div>
</div>
</template>
<script lang="ts" setup>
import { useCssModule } from 'vue';
// 我们可以通过useCssModule来访问对应module的class对象
const def = useCssModule(); // 获取默认的class对象
console.log('def', def);
const custom = useCssModule('custom'); // 获取module名为custom的class对象
console.log('custom', custom);

const emit = defineEmits<{
    (e: 'test', val: string): void
    (e: 'test1', val: string): void
}>()
 const test = () => {
    emit('test', 'test')
    emit('test1', 'test1')
 }

//  fetch('/api/user').then(res => res.json()).then(res => {
//     console.log('res', res)
//  })
</script>
<!-- 默认使用$style作为变量名 -->
<style module lang="scss">
:global(:root) {
    --var-color: red
}
.css-demo {
    .text{
        color: var(--var-color);
        &.bg {
            background-color: #f3f;
        }
    }
}
</style>
<!-- 自定义变量名 -->
<style module="custom" lang="scss">
.css-demo {
    .bg {
        background: #000;
    }
    .text {
        color: skyblue;
    }
}
</style>


