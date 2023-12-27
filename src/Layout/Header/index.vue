<template>
	<div class="lxy-header">这是头部</div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, reactive, toRefs, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const baseData = [
	{
		name: "111",
		id: "111",
		data: [],
		isDraggable: true,
	},
	{
		name: "test",
		id: "111",
		data: [],
	},
	{
		name: "浏览产业云图a",
		data: [],
		id: "222",
		component: "BarChartHor",
	},
	{
		name: "test",
		id: "111",
		data: [],
	},
	{
		name: "浏览产业云图a",
		data: [],
		id: "222",
		component: "BarChartHor",
	},
	{
		name: "面板a",
		data: [],
		id: "333",
		component: "BarChart",
	},
	{
		name: "面板b",
		data: [],
		id: "333",
		component: "BarChart",
	},
	{
		name: "111",
		id: "111",
		data: [],
		isDraggable: true,
	},
	{
		name: "浏览产业云图",
		data: [],
		id: "222",
		component: "BarChartHor",
	},

	{
		name: "222",
		id: "555",
		data: [],
		isDraggable: true,
	},
	{
		name: "浏览产业云图122",
		data: [],
		id: "666",
		component: "BarChartHor",
	},
	{
		name: "面板1212",
		data: [],
		id: "777",
		component: "LineChart",
	},
	{
		name: "面板111212",
		data: [],
		id: "888",
		component: "BarChart",
	},
	{
		name: "面板111212",
		data: [],
		id: "45465",
		component: "BarChart",
	},
];
const formatData = () => {
	let isDraggable = false;
	let tempArr = [];
	let prevX = -1, prevY = 0;
	for (let i = 0; i < baseData.length; i++) {
		let tempObj = baseData[i];
		if (!tempObj.isDraggable) {
			prevX += 1;
			if (isDraggable) prevY += 1;
			if (prevX > 2) {
				prevX = 0;
				prevY += 1;
			}
		} else {
			prevX = -1;
			if (i) prevY += 1;
		}
		tempObj.x = tempObj.isDraggable ? prevX + 1 : prevX;
		tempObj.y = prevY;
		tempArr.push(tempObj);
		isDraggable = tempObj.isDraggable;
	}
};
onMounted(() => {
	formatData();
});
</script>
<style scoped lang="scss">
@include b(header) {
	height: 40px;
	border-bottom: 1px solid #e1dddd;
}
</style>