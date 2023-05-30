<template>
    <div class="lxy-header">
        <slot name="header" data="头部测试数据">这是内容头部</slot>
    </div>
    <div class="lxy-list">
        <div :key="item" v-for="item in list" @click="handleClick(item)" class="lxy-list__item">
            {{ item }}
            <slot :item="item"></slot>
        </div>
    </div>
    <div class="footer">
        <slot name="footer" data="底部测试数据">这是内容底部</slot>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"
withDefaults(defineProps<{
    list: any[]
}>(), {
    list: () => []
})
const emit = defineEmits<{
    (e: 'submit', obj: { name: string, value: number }):void
}>();
const handleClick = (item: number) => {
    emit('submit', { name: 'test', value: item })
}
const fn = () => {
    console.log('333');
}
defineExpose({
    name: 'test',
    fn
})

</script>
<style scoped lang="scss">

</style>