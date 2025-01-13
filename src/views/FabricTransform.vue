<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>轉換圖片</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  const canvas = new fabric.Canvas('c1')
  let triangle = new fabric.Triangle({
    top: 50,
    left: 100,
    width: 80,
    height: 100,
    fill: 'blue',
    angle: 30, // 旋轉n度
    scaleX: 3, // X軸方向放大n倍，負數時圖形反轉
    scaleY: -2, // Y軸方向放大n倍，負數時圖形反轉
  })
  canvas.add(triangle)
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
