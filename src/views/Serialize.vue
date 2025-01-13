<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>輸出JSON</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>輸出PNG(base64版)</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>輸出SVG</p>
      <canvas width="350" height="350" id="c3" style="border: 1px solid #ccc"></canvas>
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
    height: 100,
    fill: 'orange',
  })
  canvas.add(rect)
  // Fabric.js 提供了 toJSON 和 toObject 兩個方法，把畫布及内容轉換成 JSON 。
  console.log('canvas stringify ', JSON.stringify(canvas))
  console.log('canvas toJSON', canvas.toJSON())
  console.log('canvas toObject', canvas.toObject())
  // -------------------------

  const canvas2 = new fabric.Canvas('c2', {
    backgroundColor: '#a5dee5',
  })

  const rectC2 = new fabric.Rect({
    left: 50,
    top: 50,
    height: 20,
    width: 20,
    fill: 'green',
  })

  const circleC2 = new fabric.Circle({
    left: 80,
    top: 80,
    radius: 40,
    fill: 'red',
  })

  canvas2.add(rectC2, circleC2)

  console.log('toPng', canvas2.toDataURL('png')) // 在控制台输出 png（base64）
  canvas2.requestRenderAll()
  // -------------------------
  const canvas3 = new fabric.Canvas('c3', {
    backgroundColor: '#a5dee5',
  })

  const rectC3 = new fabric.Rect({
    left: 50,
    top: 50,
    height: 20,
    width: 20,
    fill: 'green',
  })

  const circleC3 = new fabric.Circle({
    left: 80,
    top: 80,
    radius: 40,
    fill: 'red',
  })

  canvas3.add(rectC3, circleC3)

  console.log(canvas3.toSVG()) // 輸出 SVG
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
