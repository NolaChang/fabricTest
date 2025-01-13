<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>平移畫布 (按Alt+滑鼠點擊移動)</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
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
    top: 130,
    left: 130,
    width: 40,
    height: 40,
    fill: 'orange',
  })

  // 圓形（參照物）
  const circle = new fabric.Circle({
    top: 150,
    left: 150,
    radius: 50,
    fill: 'green',
  })
  canvas.add(rect, circle) // 將矩形和圓形添加到畫布中

  // 鼠標按下時觸發
  canvas.on('mouse:down', (opt) => {
    let evt = opt.e
    // 是否按住alt
    if (evt.altKey === true) {
      canvas.isDragging = true // isDragging 是自定義的，開啟移動狀態
      canvas.lastPosX = evt.clientX // lastPosX 是自定義的
      canvas.lastPosY = evt.clientY // lastPosY 是自定義的
    }
  })

  // 鼠標移動時觸發
  canvas.on('mouse:move', (opt) => {
    if (canvas.isDragging) {
      let evt = opt.e
      let vpt = canvas.viewportTransform // 聚焦視圖的轉換
      // https://cloud.tencent.com/developer/article/2119107
      // viewportTransform: default:[1,0,0,1,0,0]
      // [0]:水平縮放（x軸方向）、[1]:水平傾斜（x軸方向）
      // [2]:垂直傾斜（y軸方向）、[3]:垂直縮放（y軸方向）
      // [4]:水平移動（x軸方向）、[5]:垂直移動（y軸方向）

      vpt[4] += evt.clientX - canvas.lastPosX
      vpt[5] += evt.clientY - canvas.lastPosY
      canvas.requestRenderAll() // 重新渲染
      canvas.lastPosX = evt.clientX
      canvas.lastPosY = evt.clientY
    }
  })
  // 鼠標放開時觸發
  canvas.on('mouse:up', (opt) => {
    canvas.setViewportTransform(canvas.viewportTransform) // 設置此畫布實例的視口轉換
    canvas.isDragging = false // 關閉移動狀態
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
