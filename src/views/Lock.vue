<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>禁止水平移動</p>
      <canvas width="300" height="300" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>禁止垂直移動</p>
      <canvas width="300" height="300" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>禁止旋轉</p>
      <canvas width="300" height="300" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>禁止水平縮放</p>
      <canvas width="300" height="300" id="c4" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>禁止垂直縮放</p>
      <canvas width="300" height="300" id="c5" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const init = () => {
  const canvas = new fabric.Canvas('c1')
  const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#ffde7d',
  })
  // 禁止水平移動
  rect.lockMovementX = true
  canvas.add(rect)

  const canvas2 = new fabric.Canvas('c2')
  const rectC2 = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#ffde7d',
  })
  // 禁止垂直移動
  rectC2.lockMovementY = true
  canvas2.add(rectC2)

  const canvas3 = new fabric.Canvas('c3')
  const rectC3 = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#3490de',
  })
  // 禁止旋轉
  rectC3.lockRotation = true
  canvas3.add(rectC3)

  const canvas4 = new fabric.Canvas('c4')
  const rectC4 = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#ff9a3c',
  })
  // 禁止水平縮放
  rectC4.lockScalingX = true
  canvas4.add(rectC4)

  const canvas5 = new fabric.Canvas('c5')
  const rectC5 = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#f95959',
  })
  // 禁止垂直縮放
  rectC5.lockScalingY = true
  canvas5.add(rectC5)
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
