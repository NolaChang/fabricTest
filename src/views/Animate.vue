<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>絕對值動畫</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>相對值動畫</p>
      <canvas width="400" height="400" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const init = () => {
  // 絕對值動畫
  const canvas = new fabric.Canvas('c1')

  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red',
  })
  // 設置矩形動畫
  // animate(動畫屬性, 動畫的結束值, [動畫的詳細訊息])
  // 動畫的詳細訊息包括:
  // rom: 允許指定可設置動畫的屬性的起始值 (如果我們不希望使用當前值)
  // duration: 更改動畫的持續時間 (默認為500ms)
  // onComplete: 在動畫結束時調用的回調
  // easing: 緩衝功能
  rect.animate('angle', '-50', {
    onChange: canvas.renderAll.bind(canvas), // 每次刷新時都會執行
  })
  rect.animate('width', '50', {
    onChange: canvas.renderAll.bind(canvas), // 每次刷新時都會執行
  })
  canvas.add(rect)

  // 相對值動畫
  const canvas2 = new fabric.Canvas('c2')
  const rectC2 = new fabric.Rect({
    left: 150,
    top: 150,
    width: 100,
    height: 100,
    fill: 'red',
  })

  // 請注意第二個參數：+=360
  // 在基礎值上做運算
  rectC2.animate('angle', '+=360', {
    onChange: canvas2.renderAll.bind(canvas2),
    duration: 2000, // 執行時間
    easing: fabric.util.ease.easeOutBounce, // 緩衝效果
  })
  rectC2.animate('height', '+=150', {
    onChange: canvas2.renderAll.bind(canvas2),
    duration: 2000, // 執行時間
    easing: fabric.util.ease.easeOutBounce, // 緩衝效果
  })

  canvas2.add(rectC2)
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
