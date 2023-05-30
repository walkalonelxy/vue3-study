<template>
    <div>
        
    </div>
    <div class="box">
        <input type="radio" value="red" name="color" v-model="colorVal">
        <input type="radio" value="blue" name="color" v-model="colorVal">
        <input type="radio" value="pink" name="color" v-model="colorVal">
        爷爷
        <div class="block"></div>
        <Child></Child>
    </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref, provide, readonly, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"
let colorVal = ref<string>('red');
// provide('color', colorVal)
provide('color', readonly(colorVal)) // 如果设置了readonly，子级将无法修改该属性值
</script>
<style scoped lang="scss">
.box {
    display: flex;
    align-items: center;
    .block {
        width: 50px;
        height: 50px;
        background-color: v-bind(colorVal);
    }
}
</style>