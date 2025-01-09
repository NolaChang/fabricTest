<template>
  <div class="grid grid-flow-row grid-cols-4 p-18 gap-8">
    <div>
      <p>圖形常用樣式</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>文本常用樣式1</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>文本常用樣式2</p>
      <canvas width="600" height="400" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  // 圖形常用樣式
  const canvas = new fabric.Canvas('c1')
  const circle = new fabric.Circle({
    top: 100,
    left: 100,
    radius: 50, // 半徑大小
    backgroundColor: '#c3d501', // 背景色
    fill: 'orange', // 填充色
    stroke: '#f6416c', // 邊框顏色
    strokeWidth: 5, // 邊框粗細
    strokeDashArray: [20, 5, 14], // 邊框虛線規則(依照線段長度、空白長度輪流): 線段20->空5->線段14->空20 ...
    shadow: '10px 20px 6px rgba(10, 20, 30, 0.4)', // 陰影：向右偏移10px，向下偏移20px，羽化6px，陰影顏色及透明度
    transparentCorners: false, // 選中時，操作點是否空心
    borderColor: '#16f1fc', // 選中時，邊框顏色
    borderScaleFactor: 5, // 選中時，邊框粗細
    borderDashArray: [20, 5, 10, 7], // 選中時，虛線邊框規則
    cornerColor: '#aaaaaa', // 選中時，操作點的顏色
    cornerStrokeColor: 'black', // 選中時，操作點的邊框顏色
    cornerStyle: 'circle', // 選中時，操作點的形狀。預設是rect 矩形；circle 圓形
    cornerSize: 20, // 選中時，操作點的大小
    cornerDashArray: [10, 2, 6], // 選中時，操作點的虛線邊框規則
    selectionBackgroundColor: '#eee', // 選中時，選擇框的背景顏色
    padding: 30, // 選中時，選擇框的的內距
    borderOpacityWhenMoving: 0.6, // 當物件移動或活動時，選擇框的外框及操作點的透明度
  })

  canvas.add(circle)

  // 文本常用樣式
  const canvas2 = new fabric.Canvas('c2')
  const textC2 = new fabric.Text('阿志', {
    top: 40,
    left: 40,
    fontSize: 90,
    backgroundColor: '#c3d501', // 背景色
    fill: 'orange', // 填充色
    stroke: '#f6416c', // 邊框顏色
    strokeWidth: 2, // 邊框粗細
    strokeDashArray: [20, 5, 14], // 邊框虛線規則(依照線段長度、空白長度輪流): 線段20->空5->線段14->空20 ...
    shadow: '10px 20px 6px rgba(10, 20, 30, 0.4)', // 陰影：向右偏移10px，向下偏移20px，羽化6px，陰影顏色及透明度
    transparentCorners: false, // 選中時，操作點是否空心
    borderColor: '#16f1fc', // 選中時，邊框顏色
    borderScaleFactor: 5, // 選中時，邊框粗細
    borderDashArray: [20, 5, 10, 7], // 選中時，虛線邊框規則
    cornerColor: '#aaaaaa', // 選中時，操作點的顏色
    cornerStrokeColor: 'black', // 選中時，操作點的邊框顏色
    cornerStyle: 'circle', // 選中時，操作點的形狀。預設是rect 矩形；circle 圓形
    cornerSize: 20, // 選中時，操作點的大小
    cornerDashArray: [10, 2, 6], // 選中時，操作點的虛線邊框規則
    selectionBackgroundColor: '#eee', // 選中時，選擇框的背景顏色
    padding: 30, // 選中時，選擇框的的內距
    borderOpacityWhenMoving: 0.6, // 當物件移動或活動時，選擇框的外框及操作點的透明度
  })

  canvas2.add(textC2)

  const canvas3 = new fabric.Canvas('c3')

  // 上劃線
  const overline = new fabric.Text('上劃線', {
    top: 30,
    left: 10,
    fontSize: 20,
    overline: true, // 上劃線
  })

  // 下劃線
  const underline = new fabric.Text('下劃線', {
    top: 30,
    left: 100,
    fontSize: 20,
    underline: true, // 下劃線
  })

  // 删除線
  const linethrough = new fabric.Text('删除線', {
    top: 30,
    left: 200,
    fontSize: 20,
    linethrough: true, // 删除線
  })

  // 左對齊
  const msg1 = '左\n左左\n左對齊'
  const left = new fabric.Text(msg1, {
    top: 100,
    left: 10,
    fontSize: 16,
    textAlign: 'left', // 左對齊
  })

  // 居中對齊
  const msg2 = '中\n中中\n居中對齊'
  const center = new fabric.Text(msg2, {
    top: 100,
    left: 100,
    fontSize: 16,
    textAlign: 'center', // 居中對齊
  })

  // 右對齊
  const msg3 = '右\n右右\n右對齊'
  const right = new fabric.Text(msg3, {
    top: 100,
    left: 200,
    fontSize: 16,
    textAlign: 'right', // 右對齊
  })

  // 文本内容
  const msg4 =
    'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labo'

  const lineHeight1 = new fabric.Text(msg4, {
    top: 250,
    left: 10,
    fontSize: 16,
    lineHeight: 1, // 行高
  })

  const lineHeight2 = new fabric.Text(msg4, {
    top: 250,
    left: 300,
    fontSize: 16,
    lineHeight: 2, // 行高
  })

  canvas3.add(overline, underline, linethrough, left, center, right, lineHeight1, lineHeight2)
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
