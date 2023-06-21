<template>
<div class="">
    <button @click="sendMessage">兄弟1</button>
</div>
</template>

<script lang="ts" setup>
import Bus from '../../utils/Bus';
let flag = false;
const sendMessage = () => {
    flag = !flag;
    Bus.emit('change', flag);
}

</script>
<style scoped lang="less">

</style>
