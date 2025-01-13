<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>禁止選中</p>
      <canvas width="300" height="300" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>無法通過空白位置選中元素</p>
      <canvas width="300" height="300" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>畫布框選樣式</p>
      <canvas width="300" height="300" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>自訂義選中樣式</p>
      <canvas width="300" height="300" id="c4" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>沒有控制點</p>
      <canvas width="300" height="300" id="c5" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>自訂義光標在對象懸停</p>
      <canvas width="300" height="300" id="c6" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>不允許框選</p>
      <canvas width="300" height="300" id="c7" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>元素移動時的樣式</p>
      <canvas width="300" height="300" id="c8" style="border: 1px solid #ccc"></canvas>
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
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: 'red',
  })
  // 元素禁止選中
  rect.selectable = false
  canvas.add(rect) // 將矩形和圓形添加到畫布中
  // ---------------------------

  const canvas2 = new fabric.Canvas('c2')
  // 三角形
  const triangle1 = new fabric.Triangle({
    top: 100,
    left: 50,
    width: 80, // 底邊寬度
    height: 100, // 底邊到定點的距離
    fill: 'blue',
  })

  // 選擇三角形空白位置的時候無法選中
  // 當perPixelTargetFind設為false後可以選中。默認值是false
  triangle1.perPixelTargetFind = true

  // 三角形
  const triangle2 = new fabric.Triangle({
    top: 100,
    left: 200,
    width: 80, // 底邊寬度
    height: 100, // 底邊到定點的距離
    fill: 'green',
  })

  canvas2.add(triangle1, triangle2)
  // 只選擇完全包含在拖動選擇矩形中的形狀
  canvas2.selectionFullyContained = true
  // ---------------------------

  // 畫布框選樣式
  const canvas3 = new fabric.Canvas('c3')
  // 圓形
  const circle = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })

  canvas3.add(circle)

  canvas3.selection = true // 畫布是否可選中。默認true；false 不可選中
  canvas3.selectionColor = 'rgba(106, 101, 216, 0.3)' // 畫布鼠標框選時的背景色
  canvas3.selectionBorderColor = '#1d2786' // 畫布鼠標框選時的邊框顏色
  canvas3.selectionLineWidth = 5 // 畫布鼠標框選時的邊框厚度
  canvas3.selectionDashArray = [30, 4, 10] // 畫布鼠標框選時邊框虛線規則
  canvas3.selectionFullyContained = true // 只選擇完全包含在拖動選擇矩形中的形狀
  // ---------------------------

  const canvas4 = new fabric.Canvas('c4')
  const circleC4 = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })

  circleC4.set({
    borderColor: 'gray', // 邊框顏色
    cornerColor: 'black', // 控制點顏色
    cornerSize: 12, // 控制點大小
    transparentCorners: true, // 控制點填充色透明
    selectionBackgroundColor: 'orange', // 選中後，背景色變橙色
  })
  circleC4.hasBorders = false // 取消邊框
  canvas4.add(circleC4)

  canvas4.setActiveObject(circleC4) // 選中第一項
  // ---------------------------
  const canvas5 = new fabric.Canvas('c5')
  const circleC5 = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })

  circleC5.hasControls = false // 禁止控制點
  canvas5.add(circleC5)
  canvas5.setActiveObject(circleC5) // 選中第一項
  // ---------------------------

  const canvas6 = new fabric.Canvas('c6')
  const circleC6 = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })
  canvas6.hoverCursor = 'wait' // 鼠標設置成等待樣式
  canvas6.add(circleC6)
  // ---------------------------

  const canvas7 = new fabric.Canvas('c7')
  const circleC7 = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })
  canvas7.add(circleC7)
  canvas7.selection = false // 不允許直接從畫布框選
  // ---------------------------

  const canvas8 = new fabric.Canvas('c8')
  const circleC8 = new fabric.Circle({
    radius: 30,
    fill: '#f55',
    top: 70,
    left: 70,
  })
  // 禁止控制點、選中外框
  circleC8.hasBorders = circleC8.hasControls = false

  canvas8.add(circleC8)

  function animate(e, dir) {
    if (e.target) {
      fabric.util.animate({
        startValue: e.target.get('angle'),
        endValue: e.target.get('angle') + (dir ? 10 : -10),
        duration: 100,
      })
      fabric.util.animate({
        startValue: e.target.get('scaleX'),
        endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
        duration: 100,
        onChange: function (value) {
          e.target.scale(value)
          canvas8.renderAll()
        },
        onComplete: function () {
          // 重新計算各個類別的邊界點座標，更新Object的位置
          e.target.setCoords()
        },
      })
    }
  }
  canvas8.on('mouse:down', function (e) {
    animate(e, 1)
  })
  canvas8.on('mouse:up', function (e) {
    animate(e, 0)
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
