<template>
  <div class="grid grid-flow-row grid-cols-3 p-18 gap-8">
    <div>
      <p>使用背景圖</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>旋轉背景圖</p>
      <canvas width="400" height="400" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>拉伸背景圖</p>
      <canvas width="400" height="400" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>重複背景圖</p>
      <canvas width="400" height="400" id="c4" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>重疊影像</p>
      <canvas width="400" height="400" id="c5" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const imgUrl = new URL('@/assets/images/files.png', import.meta.url).href
// const imgUrl = 'https://glcouduser-11a82.kxcdn.com/1/savedDesign/thumbnails/43955.jpeg'

const init = () => {
  // 使用背景圖
  const canvas = new fabric.Canvas('c1')
  canvas.setBackgroundImage(imgUrl, canvas.renderAll.bind(canvas))
  // 旋轉背景圖
  const canvas2 = new fabric.Canvas('c2')
  canvas2.setBackgroundImage(imgUrl, canvas2.renderAll.bind(canvas2), {
    angle: 15,
  })
  // 拉伸背景圖
  const canvas3 = new fabric.Canvas('c3')
  fabric.Image.fromURL(imgUrl, (img) => {
    canvas3.setBackgroundImage(img, canvas3.renderAll.bind(canvas3), {
      scaleX: canvas3.width / img.width,
      scaleY: canvas3.height / img.height,
    })
  })
  // 重複背景圖
  const canvas4 = new fabric.Canvas('c4')
  canvas4.setBackgroundColor(
    {
      source: '/src/assets/images/filesSmaller.png',
      repeat: 'repeat',
    },
    canvas4.renderAll.bind(canvas4),
  )
  // 重疊影像
  const canvas5 = new fabric.Canvas('c5')
  canvas5.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 30,
      left: 20,
    }),
  )
  // setOverlayImage: 設置覆蓋的畫布
  // 傳入參數:(image, callback, optionsopt)
  canvas5.setOverlayImage(imgUrl, canvas5.renderAll.bind(canvas5))
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
