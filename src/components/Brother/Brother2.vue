<template>
<div class="">
    兄弟2接收一下哇：{{ flags }}
</div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed} from 'vue'
import Bus from '../../utils/Bus';
let flags = ref(false);
Bus.on('change', (flag: boolean) => {
    flags.value =flag;
})
</script>
<style scoped lang="less">

</style>
