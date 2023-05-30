<template>
    <div class="lxy-content">
        <List ref="list" :list="[1, 2, 3, 4]" @submit="submit">
            <template #header>
                头部自定义
            </template>
            <template #default="{ item }">
                {{ item + 2 }}
            </template>
            <template #[customSlot]="{ data }">
                {{ data }}
            </template>
        </List>
        
        <RandomNum></RandomNum>
        <Nest></Nest>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import List from '@/components/List/index.vue'
import RandomNum from '@/components/RandomNum/index.vue'
import Nest from '@/components/Nest/index.vue'
const list = ref<InstanceType<typeof List>>()
const customSlot = ref('header')
const submit = (obj: object) => {
    console.log('vvv', obj);
    console.log('list.value?.name', list.value?.name);
    list.value?.fn()
}
</script>
<style scoped lang="scss">
@include b(content) {
    flex: 1;
}
</style>