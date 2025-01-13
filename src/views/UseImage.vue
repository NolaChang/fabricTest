<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>使用HTML的圖片</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
      <img class="hidden" src="@/assets/images/filesSmaller.png" id="pic" />
    </div>
    <div>
      <p>使用js引入</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
import pic2 from '@/assets/images/filesSmaller.png'

const init = () => {
  // 使用HTML的圖片
  const canvas = new fabric.Canvas('c1')
  const imgElement = document.getElementById('pic')
  // onload監聽圖片是否加載完成
  imgElement.onload = () => {
    let imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      width: 200,
      height: 200,
      angle: 50,
    })
    canvas.add(imgInstance)
  }

  // 使用js引入
  const canvas2 = new fabric.Canvas('c2')
  // 加載圖片
  fabric.Image.fromURL(pic2, (oImg) => {
    oImg.scale(2.5) // 縮放
    canvas2.add(oImg)
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
