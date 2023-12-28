<template>
    <div class="lxy-content">
        <div class="lxy-content__left">
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
            <Brother></Brother>
            <BtnAuth></BtnAuth>
            <HooksCase>
                <div class="test mt-2.5">abc</div>
            </HooksCase>
        </div>
        <div class="lxy-content__right">
            <CssDemo>
                <div class="text">我是插槽里面的内容, 我想修改样式</div>
            </CssDemo>
            <!-- <LazyLoadImg></LazyLoadImg> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import List from '@/components/List/index.vue'
import RandomNum from '@/components/RandomNum/index.vue'
import Nest from '@/components/Nest/index.vue'
import Brother from '@/components/Brother/index.vue'
import BtnAuth from '@/components/Directive/BtnAuth/index.vue'
import HooksCase from '@/components/HooksCase/index.vue'
import LazyLoadImg from '@/components/LazyLoadImg/index.vue'
import CssDemo from '@/components/CssDemo/index.vue'
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
    display: flex;
}
</style>