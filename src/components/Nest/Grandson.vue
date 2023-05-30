<template>
  <div>孙子</div>
  <div class="block" @click="change">修改颜色</div>
</template>

<script setup lang="ts">
import { ref, inject, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"
import type { Ref } from 'vue';
let colorVal = inject<Ref<string>>('color');

const change = () => {
    colorVal!.value = 'black'
}


</script>
<style scoped lang="scss">
.block {
    width: 50px;
    height: 50px;
    background-color: v-bind(colorVal);
}
</style>