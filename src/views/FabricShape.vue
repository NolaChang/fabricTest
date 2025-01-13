<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>矩形</p>
      <canvas width="250" height="250" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>圓角矩形</p>
      <canvas width="250" height="250" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>圓形</p>
      <canvas width="250" height="250" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>橢圓形</p>
      <canvas width="250" height="250" id="c4" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>三角形</p>
      <canvas width="250" height="250" id="c5" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>線段</p>
      <canvas width="250" height="250" id="c6" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>折線</p>
      <canvas width="250" height="250" id="c7" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>多邊形</p>
      <canvas width="250" height="250" id="c8" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 矩形
  const canvas = new fabric.Canvas('c1')
  const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    fill: 'orange',
  })
  canvas.add(rect)

  // 圓角矩形 (用整體半徑去調，而不是個別調整每個角的圓角角度)
  const canvas2 = new fabric.Canvas('c2')
  const rectC2 = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    fill: 'orange',
    rx: 20, // x軸的半徑
    ry: 20, // y軸的半徑
  })
  canvas2.add(rectC2)

  // 圓形
  const canvas3 = new fabric.Canvas('c3')
  const circle = new fabric.Circle({
    top: 100,
    left: 100,
    radius: 50, // 圓形半徑大小
    fill: 'green',
  })
  canvas3.add(circle)

  //  橢圓形
  const canvas4 = new fabric.Canvas('c4')
  const ellipse = new fabric.Ellipse({
    top: 60,
    left: 80,
    rx: 60,
    ry: 80,
    fill: 'hotpink',
  })
  canvas4.add(ellipse)

  // 三角形
  const canvas5 = new fabric.Canvas('c5')
  const triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 80, // 底的長度
    height: 100, // 底到對角的垂直距離
    fill: 'blue',
  })
  canvas5.add(triangle)

  // 線段
  const canvas6 = new fabric.Canvas('c6')
  const line = new fabric.Line(
    [
      10, // 起始點座標x
      10, // 起始點座標y
      150, // 結束點座標x
      200, // 結束點座標y
    ],
    {
      stroke: '#395', // 筆觸顏色
    },
  )
  canvas6.add(line)

  // 折線
  const canvas7 = new fabric.Canvas('c7')
  const polyline = new fabric.Polyline(
    [
      { x: 30, y: 30 },
      { x: 150, y: 140 },
      { x: 240, y: 150 },
      { x: 100, y: 30 },
    ],
    {
      fill: 'transparent', // 如果只要線段:填充透明色 ((預設黑色))
      stroke: '#abc', // 線段顏色
      strokeWidth: 4, // 線段粗細
    },
  )
  canvas7.add(polyline)

  // 多邊形
  const canvas8 = new fabric.Canvas('c8')
  const polylineC8 = new fabric.Polygon(
    [
      { x: 30, y: 30 },
      { x: 150, y: 140 },
      { x: 240, y: 150 },
      { x: 100, y: 30 },
    ],
    {
      fill: '#dbf', // 填充顏色
      stroke: '#6639a6', // 線段顏色
      strokeWidth: 4, // 線段粗細
    },
  )
  canvas8.add(polylineC8)
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
