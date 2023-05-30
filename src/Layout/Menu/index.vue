<template>
    <div class="lxy-menu">
        <Tree :data="menuList"></Tree>
    </div>
</template>

<script setup lang="ts">
import Tree from '@/components/Tree/Tree.vue'
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}
const menuList = reactive<Tree[]>([{
    name: '1',
    checked: false,
    children: [{
        name: '1-1',
        checked: true,
    }, {
        name: '1-2',
        checked: false,
    }, {
        name: '1-3',
        checked: true,
    }]
}, {
    name: '2',
    checked: false,
}, {
    name: '3',
    checked: false,
    children: [{
        name: '3-1',
        checked: false,
    }, {
        name: '3-2',
        checked: false,
    }, {
        name: '3-3',
        checked: false,
    }]
}, {
    name: '4',
    checked: false,
}])



</script>
<style scoped lang="scss">
@include b(menu) {
    width: 200px;
    border-right: 1px solid #e1dddd;
}
</style>