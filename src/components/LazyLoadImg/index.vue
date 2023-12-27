<template>
    <div class="lazy-load">
        <img v-lazy="img" v-for="img in urlList" :key="img" alt="loading...">
    </div>
</template>

<script lang="ts" setup>
// 自定义指令实现图片懒加载
import type { Directive } from 'vue';
let imgs = import.meta.glob('@/assets/imgs/*.*', { eager: true });
const urlList = Object.keys(imgs);
let vLazy: Directive<HTMLImageElement, string> = (el, binding) => {
    el.src = urlList[0];
    const observer = new IntersectionObserver(entries => {
        // console.log('entries', binding.value, entries[0], entries[0].isIntersecting, entries[0].intersectionRatio);
        // 如果该图片进入可视区域(可通过下面的root参数指定，不指定则相对于整个屏幕)，则将默认图片替换为该图片
        if (entries[0].isIntersecting) {
            setTimeout(() => {
                el.src = binding.value;
                el.onload = () => {
                    // console.log('el', binding.value, el.clientHeight);
                }
                observer.unobserve(el);
            }, 1000);
        }
    }, {
        root: document.querySelector('.lazy-load'),
    });
    observer.observe(el);
}

</script>
<style scoped lang="scss">
.lazy-load {
    width: 420px;
    height: 600px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: skyblue;
        background-image: -webkit-linear-gradient(45deg,
                rgba(255, 255, 255, 0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.2) 75%,
                transparent 75%,
                transparent);
    }

    &::-webkit-scrollbar-track {
        background: #ededed;
    }

    img {
        width: 200px;
        margin-bottom: 20px;
    }
}
</style>
