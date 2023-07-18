<template>
<div class="">
    <button @click="sendMessage">兄弟1{{ test }}</button>
</div>
</template>

<script lang="ts" setup>
import Bus from '../../utils/Bus';
let flag = false;
let test = ref(1);
const sendMessage = () => {
    test.value += 1
    flag = !flag;
    Bus.emit('change', flag);
}

</script>
<style scoped lang="less">

</style>
