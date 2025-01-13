<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>以原點為基準縮放畫布</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>以屬標指針為基準縮放畫布</p>
      <canvas width="400" height="400" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const init = () => {
  const canvas = new fabric.Canvas('c1')
  // 矩形（參照物）
  const rect = new fabric.Rect({
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    fill: 'orange',
  })

  // 圓形（參照物）
  const circle = new fabric.Circle({
    top: 30,
    left: 30,
    radius: 50,
    fill: 'green',
  })
  canvas.add(rect, circle) // 將矩形和圓形添加到畫布中

  // 監聽鼠标滾輪事件
  canvas.on('mouse:wheel', (opt) => {
    let delta = opt.e.deltaY // 滾輪向上滾一下是 -100，向下滾一下是 100
    let zoom = canvas.getZoom() // 獲取畫布當前縮放值

    // 控制縮放範圍在 0.1~10 的區間内
    zoom *= 0.999 ** delta
    if (zoom > 10) zoom = 10
    if (zoom < 0.1) zoom = 0.1
    console.log(zoom)

    // 設置畫布縮放比例
    canvas.setZoom(zoom)
  })

  const canvas2 = new fabric.Canvas('c2')
  // 矩形（參照物）
  const rectC2 = new fabric.Rect({
    top: 130,
    left: 130,
    width: 40,
    height: 40,
    fill: 'orange',
  })

  // 圓形（參照物）
  const circleC2 = new fabric.Circle({
    top: 150,
    left: 150,
    radius: 50,
    fill: 'green',
  })
  canvas2.add(rectC2, circleC2)
  // 監聽鼠标滾輪事件
  canvas2.on('mouse:wheel', (opt) => {
    let delta = opt.e.deltaY // 滾輪向上滾一下是 -100，向下滾一下是 100
    let zoom = canvas2.getZoom() // 獲取畫布當前縮放值

    // 控制縮放範圍在 0.1~10 的區間内
    zoom *= 0.999 ** delta
    if (zoom > 10) zoom = 10
    if (zoom < 0.1) zoom = 0.1
    console.log(zoom)

    // 設置畫布縮放比例
    // 關鍵點！！！
    // 參數1：將畫布的所放點設置成屬標当前位置
    // 參數2：傳入縮放值
    canvas2.zoomToPoint(
      {
        x: opt.e.offsetX, // 屬標x軸座標
        y: opt.e.offsetY, // 屬標y軸座標
      },
      zoom, // 最後要縮放的值
    )
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
