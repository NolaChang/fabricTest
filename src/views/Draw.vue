<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>繪畫</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const init = () => {
  const canvas = new fabric.Canvas('c1', {
    isDrawingMode: true, // 開啟繪圖模式
  })
  // freeDrawingBrush: 設置畫筆樣式
  // 設置畫筆顏色
  canvas.freeDrawingBrush.color = '#11999e'

  // 設置畫筆粗細
  canvas.freeDrawingBrush.width = 8

  // 畫筆投影
  canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: 10,
    offsetX: 10,
    offsetY: 10,
    affectStroke: true,
    color: '#30e3ca',
  })
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
