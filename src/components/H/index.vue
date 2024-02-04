<template>
<div class="h-test">
    <div>h函数</div>
    <Btn test="333"></Btn>
</div>
</template>

<script lang="ts" setup>
import { h, reactive, ref, computed} from 'vue'

console.log('env', import.meta.env);

const Btn = (props, context) => {
    return h(
        'button', 
        {
            onClick: () => console.log('3333'),
        },
        '测试按钮'
        )
}
</script>
<style scoped lang="scss">
.h-test{
    margin-top: 10px;
}
</style>
