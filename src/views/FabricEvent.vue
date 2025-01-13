<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>事件</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
      <button @click="addClickEvent" class="p-5 mt-8 bg-slate-400 rounded-5 text-white">
        添加畫布點擊事件
      </button>
      <button @click="removeClickEvent" class="ml-15 p-5 mt-8 bg-slate-400 rounded-5 text-white">
        移除畫布點擊事件
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

let canvas = null
// 移除畫布點擊事件
const removeClickEvent = () => {
  canvas.off('mouse:down')
}

// 添加畫布點擊事件
function addClickEvent() {
  removeClickEvent() // 在添加事件之前先把該事件清除掉，避免重複添加事件
  canvas.on('mouse:down', (options) => {
    console.log(`x軸座標: ${options.e.clientX};    y軸座標: ${options.e.clientY}`)
  })
}

const init = () => {
  canvas = new fabric.Canvas('c1')

  const rect = new fabric.Rect({
    top: 20,
    left: 20,
    width: 100,
    height: 50,
    fill: '#9896f1',
  })
  // 給矩形添加一個選中事件
  rect.on('selected', (options) => {
    console.log('選中矩形啦', options)
  })
  canvas.add(rect)
  addClickEvent()
}

onMounted(() => {
  init()
})
</script>

<style scoped>
p {
  margin-bottom: 10px;
}
</style>
