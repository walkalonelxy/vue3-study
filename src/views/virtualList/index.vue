<template>
    <div class="test" @scroll="onScroll">
        <div class="scroll" style="height:60000px">
            <div class="list" :style="{ transform: `translateY(${translateY}px)` }">
                <div :style="{ background: item % 2 ? 'rgba(255, 255, 0, .5)' : 'rgba(255, 0, 0, .5)' }"
                    v-for="(item, index) in listData" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            allData: [],
            startIndex: 0,
            endIndex: 10,
            translateY: 0,
            cacheCount: 5 
        }
    },
    computed: {
        listData() {
            const { startIndex, endIndex } = this;
            return this.allData.slice(startIndex, endIndex);
        }
    },  
    mounted() {
        this.allData = Array.from({ length: 1000 }, (v, i) => i + 1);

    },
    methods: {
        onScroll(e) {
            const { scrollTop } = e.target;
            if (this.translateY === scrollTop) return;
            this.startIndex = Math.floor(scrollTop / 60);
            this.endIndex = this.startIndex + 10 + this.cacheCount;
            if (this.startIndex > this.cacheCount) {
                this.startIndex = this.startIndex - this.cacheCount;
                this.translateY = scrollTop - (scrollTop % 60) - this.cacheCount * 60;
            } else { 
                this.translateY = scrollTop - (scrollTop % 60);
            }
            
            
        },

    }
}

</script>
<style lang="scss" scoped>
.test {
    overflow: auto;
    z-index: 999;  
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 600px;
    border: 1px solid rgb(255, 0, 0);
    color: #fff;
    &::-webkit-scrollbar {
        width: 15px;
        background-color: rgba($color: #000000, $alpha: 0.1);
        /*高宽分别对应横竖滚动条的尺寸*/
    }
    &::-webkit-scrollbar-thumb {
            background-color: rgba($color: #db1a1a, $alpha: 1.0);
    }
    .scroll {
        background-color: blue;

        .list {
            width: 50%;
            // transition: transform 0.1s;
            >div {
                height: 60px;
                // &:nth-child(2n) {
                //     background-color: rgba(255, 255, 0, .5);
                // }
                // &:nth-child(2n+1) {
                //     background-color: rgba(255, 0, 0, .5);
                // }
            }
        }
    }
}
</style>
