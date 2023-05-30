<template>
    <div class="lxy-box">
        <Header></Header>
        <div class="lxy-box__body">
            <Menu></Menu>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from "./Header/index.vue";
import Menu from "./Menu/index.vue";
import Content from "./Content/index.vue";
import { ref, reactive, toRefs, onMounted, watch} from "vue"
import { useRouter } from "vue-router"

</script>
<style scoped lang="scss">
@include b(box) {
    @include bfc;
    display: flex;
    flex-direction: column;
    @include e(body) {
        flex: 1;
        display: flex;
    }
}
</style>