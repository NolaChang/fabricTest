<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>裁剪單一圖形</p>
      <canvas width="300" height="300" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>裁剪一個群組</p>
      <canvas width="300" height="300" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>組合剪輯</p>
      <canvas width="300" height="300" id="c3" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>剪完再剪(組合剪輯)</p>
      <canvas width="300" height="300" id="c4" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>群組內嵌套剪輯</p>
      <canvas width="300" height="300" id="c5" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>文字裁剪</p>
      <canvas width="300" height="300" id="c6" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>裁剪畫布</p>
      <canvas width="300" height="300" id="c7" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>裁剪畫布，但不裁控件</p>
      <canvas width="300" height="300" id="c8" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>反向裁剪</p>
      <canvas width="300" height="300" id="c9" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>絕對定位裁剪</p>
      <canvas width="300" height="300" id="c10" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>動畫裁剪</p>
      <canvas width="300" height="300" id="c11" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
const init = () => {
  const canvas = new fabric.Canvas('c1')
  // 裁剪的圖形
  // clipPath從對象的中心開始定位，對象originX和originY不起任何作用，而clipPath originX和originY起作用。
  // 定位邏輯與fabric.Group相同
  const clipPath = new fabric.Circle({
    radius: 40,
    left: -40,
    top: -40,
  })
  // 矩形
  const rect = new fabric.Rect({
    top: 50,
    left: 50,
    width: 200,
    height: 100,
    fill: 'red',
  })

  // 裁剪矩形
  rect.clipPath = clipPath
  canvas.add(rect)

  // ---------------------------

  const canvas2 = new fabric.Canvas('c2')
  const clipPathC2 = new fabric.Circle({
    radius: 40,
    left: -40,
    top: -40,
  })

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'green',
      left: 100,
      top: 100,
    }),
  ])

  // 裁剪一個組
  group.clipPath = clipPathC2
  canvas2.add(group)
  // ---------------------------

  const canvas3 = new fabric.Canvas('c3')
  const clipPathC3 = new fabric.Group(
    [
      new fabric.Circle({ radius: 70, top: -70, left: -70 }),
      new fabric.Circle({ radius: 40, top: -95, left: -95 }),
      new fabric.Circle({ radius: 40, top: 15, left: 15 }),
    ],
    { left: -95, top: -95 },
  )

  const groupC3 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'green',
      left: 100,
      top: 100,
    }),
  ])

  groupC3.clipPath = clipPathC3
  canvas3.add(groupC3)

  // ---------------------------

  const canvas4 = new fabric.Canvas('c4')
  const clipPathC4 = new fabric.Circle({ radius: 70, top: -50, left: -50 })
  const innerClipPath = new fabric.Circle({ radius: 70, top: -90, left: -90 })
  // clipPathC4和innerClipPath交集
  clipPathC4.clipPath = innerClipPath

  const groupC4 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  groupC4.clipPath = clipPathC4
  canvas4.add(groupC4)

  // ---------------------------
  const canvas5 = new fabric.Canvas('c5')
  const clipPathC5 = new fabric.Circle({ radius: 100, top: -100, left: -100 })
  const small = new fabric.Circle({ radius: 50, top: -50, left: -50 })

  const groupC5 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red', clipPath: small }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  groupC5.clipPath = clipPathC5
  canvas5.add(groupC5)

  // ---------------------------

  const canvas6 = new fabric.Canvas('c6')
  const clipPathC6 = new fabric.Text("Hi I'm the \nnew ClipPath!\nI hope we'll\nbe friends", {
    top: -100,
    left: -100,
  })

  const groupC6 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  groupC6.clipPath = clipPathC6
  canvas6.add(groupC6)

  // ---------------------------

  const canvas7 = new fabric.Canvas('c7', {
    backgroundColor: '#ddd',
  })

  const groupC7 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  const clipPathC7 = new fabric.Circle({ radius: 100, top: 0, left: 50 })
  canvas7.clipPath = clipPathC7
  canvas7.add(groupC7)

  // ---------------------------

  const canvas8 = new fabric.Canvas('c8', {
    backgroundColor: '#ddd',
  })
  const groupC8 = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  // 裁剪區之外控件可見
  canvas8.controlsAboveOverlay = true

  const clipPathC8 = new fabric.Circle({ radius: 100, top: 0, left: 50 })
  canvas8.clipPath = clipPathC8
  canvas8.add(groupC8)
  // ---------------------------

  const canvas9 = new fabric.Canvas('c9')

  const clipPath1 = new fabric.Circle({ radius: 100, top: -200, left: -220 })
  const clipPath2 = new fabric.Circle({ radius: 100, top: 0, left: -20 })
  const clipPath3 = new fabric.Circle({ radius: 100, top: 0, left: -220 })
  const clipPath4 = new fabric.Circle({ radius: 100, top: -200, left: -20 })
  const g = new fabric.Group([clipPath1, clipPath2, clipPath3, clipPath4])

  g.inverted = true // 反向裁剪

  fabric.Image.fromURL('http://fabricjs.com/assets/dragon.jpg', function (img) {
    img.clipPath = g
    img.scaleToWidth(500)
    canvas9.add(img)
  })

  // ---------------------------

  const canvas10 = new fabric.Canvas('c10')
  const clipPathC10 = new fabric.Rect({
    width: 300,
    height: 300,
    top: 0,
    left: 0,
    absolutePositioned: true,
  })

  const clipPathC102 = new fabric.Rect({
    width: 300,
    height: 300,
    top: 0,
    left: 0,
    absolutePositioned: true,
  })

  fabric.Image.fromURL('http://fabricjs.com/assets/dragon.jpg', function (img) {
    img.clipPath = clipPathC10
    img.scaleToWidth(300)
    canvas10.add(img)
  })

  fabric.Image.fromURL('http://fabricjs.com/assets/dragon2.jpg', function (img) {
    img.clipPath = clipPathC102
    img.scaleToWidth(300)
    img.top = 150
    canvas10.add(img)
  })
  // ---------------------------
  const canvas11 = new fabric.Canvas('c11', {
    backgroundColor: '#ddd',
  })

  const clipPathC11 = new fabric.Rect({ width: 100, height: 100, top: 0, left: 0 })

  function animateLeft() {
    clipPathC11.animate(
      {
        left: 200,
      },
      {
        duration: 900,
        onChange: canvas11.requestRenderAll.bind(canvas11),
        onComplete: animateRight,
      },
    )
  }

  function animateRight() {
    clipPathC11.animate(
      {
        left: 0,
      },
      {
        duration: 1200,
        onChange: canvas11.requestRenderAll.bind(canvas11),
        onComplete: animateLeft,
      },
    )
  }

  function animateDown() {
    clipPathC11.animate(
      {
        top: 100,
      },
      {
        duration: 500,
        onChange: canvas11.requestRenderAll.bind(canvas11),
        onComplete: animateUp,
      },
    )
  }

  function animateUp() {
    clipPathC11.animate(
      {
        top: 0,
      },
      {
        duration: 400,
        onChange: canvas11.requestRenderAll.bind(canvas11),
        onComplete: animateDown,
      },
    )
  }

  const groupC11 = new fabric.Group(
    [
      new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
      new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
      new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
      new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
    ],
    {
      scale: 1.5, // 沒看到差別?
    },
  )
  // 裁剪區之外控件可見
  canvas11.controlsAboveOverlay = true

  animateLeft()
  animateDown()

  canvas11.clipPath = clipPathC11
  canvas11.add(groupC11)
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
