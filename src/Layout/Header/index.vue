<template>
  <div class="lxy-header">这是头部</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"

</script>
<style scoped lang="scss">
@include b(header) {
    height: 40px;
    border-bottom: 1px solid #e1dddd;
}
</style>