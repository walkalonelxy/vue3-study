<template>
<div class="btn-wrap">
    <button v-has="'list:add'">添加1</button>
    <button v-has="'list:edit'">编辑</button>
    <button v-has="'list:delete'">删除</button>
</div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed} from 'vue'
import { useRouter } from 'vue-router'
import type { Directive, DirectiveBinding } from 'vue';

const permission = ['userId:list:add', 'userId:list:edit', 'userId:list:delete']
// 自定义指令如果只需要在mounted和updated做相同处理，则可以使用函数简写模式
// 自定义指令函数简写模式 实现按钮权限控制
const vHas: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes('userId:' + binding.value)) {
        el.style.display = 'none'
    }
}

</script>
<style scoped lang="scss">

</style>
