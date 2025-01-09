<template>
  <div class="grid grid-flow-row grid-cols-4 p-18 gap-8">
    <div>
      <p>路徑</p>
      <canvas width="300" height="300" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 路徑
  const canvas = new fabric.Canvas('c1')
  // M: 新的座標的起始點
  // L: 每個折點的座標
  // Z: 自動閉合，連接起始點跟結束點
  const path = new fabric.Path('M 0 0 L 30 100 L 10 180 L 170 200 z')
  path.set({
    top: 50,
    left: 50,
    fill: 'hotpink',
    opacity: 0.5, // 透明度:50% (影響包含邊線及填充顏色)
    stroke: 'black',
    strokeWidth: 3,
  })

  canvas.add(path)
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
