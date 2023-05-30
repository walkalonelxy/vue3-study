<template>
    <div class="tree" v-for="item in data" :key="item.name">
        <input type="checkbox" v-model="item.checked" /> <span>{{ item.name }}</span>
        <Tree v-if="item.children?.length" :data="item?.children"></Tree>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

defineProps<{
    data?: Tree[]
}>()

</script>
<style scoped lang="scss">
    .tree {
        margin-left: 10px;
    }  
</style>