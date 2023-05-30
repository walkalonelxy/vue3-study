<template>
    <div>
        <button @click="random">伪数独</button>
        <transition-group move-class="move" tag="div" class="wrap">
            <div 
                class="item" 
                :style="{ background: item.bgColor }" 
                :key="item.id" 
                v-for="item in tableList"
            >{{ item.number }}</div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"
import _ from 'lodash'

const randomRgb = () => {//rgb颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b}, 0.3)`;
}
let tableList  = ref(Array.apply(null, { length: 81 } as number[]).map((_, ind) => {
    return {
        id: ind,
        number: (ind % 9) + 1,
        bgColor: randomRgb()
    }
}))
const random = () => {
    tableList.value = tableList.value.map(item => {
        item.bgColor = randomRgb();
        return item;
    })
    tableList.value = _.shuffle(tableList.value);
}
</script>
<style scoped lang="scss">
.wrap {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9 + 9px);
    .item {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .move {
        transition: all 3s;
    }
}

</style>