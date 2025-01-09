<template>
  <div class="grid grid-flow-row grid-cols-3 p-18 gap-8">
    <div>
      <p>可交互</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>不可交互</p>
      <canvas width="400" height="400" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>在js設定畫布參數</p>
      <canvas id="c3"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 可交互
  const canvas = new fabric.Canvas('c1')
  const rect = new fabric.Rect({
    top: 30,
    left: 30,
    width: 100,
    height: 60,
    fill: 'cyan',
  })
  canvas.add(rect)

  // 不可交互
  // StaticCanvas:不可操作的畫布
  const canvas2 = new fabric.StaticCanvas('c2')
  const rect2 = new fabric.Rect({
    top: 30,
    left: 30,
    width: 100,
    height: 60,
    fill: 'red',
  })
  canvas2.add(rect2)

  // 在js設定畫布參數
  const canvas3 = new fabric.Canvas('c3', {
    width: 300,
    height: 300,
    backgroundColor: '#eee',
  })
  const circleC3 = new fabric.Circle({
    radius: 30,
    top: 20,
    left: 20,
    fill: 'pink',
  })
  canvas3.add(circleC3)
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
