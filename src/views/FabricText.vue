<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>普通文本</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>可編輯文本</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>文本框</p>
      <canvas width="350" height="350" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 文本
  const canvas = new fabric.Canvas('c1')
  const text = new fabric.Text('我是一段文字')
  canvas.add(text)

  // 可編輯文本
  const canvas2 = new fabric.Canvas('c2')
  const textC2 = new fabric.IText('一段可編輯文字')
  canvas2.add(textC2)

  // 文本框
  // 一樣可編輯，寬度可調，文字會自己折行
  const canvas3 = new fabric.Canvas('c3')
  const textC3 = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    width: 250,
  })
  canvas3.add(textC3)
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
