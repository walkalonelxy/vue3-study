<!--
 * @Author: 梁小鱼
 * @Date: 2023-01-29 17:16:04
 * @LastEditors: lxy
 * @LastEditTime: 2023-11-15 16:47:31
 * @FilePath: \vue3-study\src\components\HelloWorld.vue
 * @Description: 
 * Copyright (c) 2023 by lxy, All Rights Reserved.
-->
<template>
  <div class="lxy-test">ref: {{ refTest }}</div>
  <div>shallowRef: {{ shallowRefTest }}</div>
  <div>customRef: {{ customRefTest }}</div>
  <div ref="dom">我是dom</div>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef, reactive, toRefs, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
// ref:深层响应
// shallowRef:浅层响应,只到value层
// triggerRef:强制更新收集的依赖，可以将shallowRef浅层响应修改的深层的值更新
const refTest = ref({ name: 'aaa' });
const shallowRefTest = shallowRef({ name: 'bbb' });
function customRefFun<T>(value: T) {
  let timer: any;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log('value', value);
        
        return value;
      },
      set(nVal) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          console.log('abc');
          value = nVal;
          trigger();
        }, 500);

      }
    }
  })
};
const customRefTest = customRefFun({ name: 'ccc' });
const dom = ref<HTMLDivElement>();

const change = () => {
  // refTest.value.name = '修改ref';
  // shallowRefTest.value = { name: '修改shallowRef' };
  // shallowRefTest.value.name = '修改shallowRef';
  // triggerRef(shallowRefTest); // 强制更新收集的依赖，让shallowRefTest.value.name可以生效
  // console.log(shallowRefTest);
  console.log('dom', dom.value?.innerText);
   
  customRefTest.value = { name: '修改customRef' }
}
</script>
<style scoped lang="scss">
@include b(test) {
  color: red;
}
</style>