<template>
  <div>爸爸</div>
  <div class="block"></div>
  <Grandson></Grandson>
</template>

<script setup lang="ts">
import Grandson from "./Grandson.vue";
import { ref, inject, reactive, toRefs, onMounted, watch} from "vue"
import type { Ref } from 'vue'
import { useRouter } from "vue-router"
const colorVal = inject<Ref<string>>('color')
</script>
<style scoped lang="scss">
.block {
    width: 50px;
    height: 50px;
    background-color: v-bind(colorVal);
}
</style>