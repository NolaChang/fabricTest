<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>線性漸變</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>徑向漸變</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 線性漸變
  const canvas = new fabric.Canvas('c1')

  let circle = new fabric.Circle({
    left: 50,
    top: 50,
    radius: 100,
  })

  let gradient = new fabric.Gradient({
    type: 'linear', // linear or radial
    gradientUnits: 'pixels', // pixels or pencentage 像素 或者 百分比
    coords: { x1: 0, y1: 0, x2: circle.width, y2: 50 }, // 漸變的擴展方式 (至少兩個座標對:起始漸層線段點、結束漸層線段點)
    colorStops: [
      // 定義漸變顏色的陣列
      { offset: 0, color: 'red' },
      { offset: 0.2, color: 'orange' },
      { offset: 0.4, color: 'yellow' },
      { offset: 0.6, color: 'green' },
      { offset: 0.8, color: 'blue' },
      { offset: 1, color: 'purple' },
    ],
  })
  circle.set('fill', gradient)
  canvas.add(circle)

  // 徑向漸變
  const canvas2 = new fabric.Canvas('c2')
  let circleC2 = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 100,
  })
  let gradientC2 = new fabric.Gradient({
    type: 'radial',
    coords: {
      r1: 100, // 該屬性錦徑向漸變可用,colorStops:{offset:0} 外圓半徑
      r2: 30, // 該屬性錦徑向漸變可用,colorStops:{offset:1} 外圓半徑
      x1: 100, // 焦點的x座標    colorStops:{offset:0}
      y1: 100, // 焦點的y座標    colorStops:{offset:0}
      x2: 120, // 中心點的x座標  colorStops:{offset:1}
      y2: 80, // 中心點的y座標  colorStops:{offset:1}
    },
    colorStops: [
      { offset: 0, color: '#fee140' },
      { offset: 1, color: '#fa709a' },
    ],
  })

  circleC2.set('fill', gradientC2)
  canvas2.add(circleC2)
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
