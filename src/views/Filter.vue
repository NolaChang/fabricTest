<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>圖片濾鏡</p>
      <canvas width="500" height="500" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
import room from '@/assets/images/room.jpg'

const init = () => {
  const canvas = new fabric.Canvas('c1')

  fabric.Image.fromURL(room, (oImg) => {
    oImg.scale(0.25) // 縮放
    canvas.add(oImg)
  })

  // 單個濾鏡
  fabric.Image.fromURL(room, (oImg) => {
    oImg.scale(0.25) // 縮放
    oImg.left = 250
    // 添加濾鏡
    oImg.filters.push(new fabric.Image.filters.Grayscale())
    // 圖片加載完後，使用濾鏡效果
    oImg.applyFilters()
    canvas.add(oImg)
  })

  // 疊加濾鏡
  // filters屬性是一個數組，所以操作可以跟Array一樣
  // 移除濾鏡: pop、splice、shift
  // 添加濾鏡: push、splice、unshift
  // applyFilters可疊加在filters屬性裡的所有濾鏡
  fabric.Image.fromURL(room, (img) => {
    img.scale(0.25)
    // 添加濾鏡
    img.filters.push(
      new fabric.Image.filters.Grayscale(), // 灰調
      new fabric.Image.filters.Sepia(), // 色偏
      new fabric.Image.filters.Brightness({ brightness: 0.2 }), // 亮度
    )
    img.applyFilters()
    img.set({
      left: 250,
      top: 250,
    })

    canvas.add(img)
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
