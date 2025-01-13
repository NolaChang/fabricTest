<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>群組建立、操作、解散</p>
      <canvas width="400" height="400" id="c1" style="border: 1px solid #ccc"></canvas>
      <button @click="ungroup" class="p-5 mt-8 bg-slate-400 rounded-5 text-white">解散群組</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
let canvas = null
const init = () => {
  canvas = new fabric.Canvas('c1')
  // 橢圓
  const ellipse = new fabric.Ellipse({
    top: 20,
    left: 20,
    rx: 100,
    ry: 50,
    fill: '#ddd',
    originX: 'center', // 旋轉x軸：left, right, center
    originY: 'center', // 旋轉y軸：top, bottom, center
  })

  // 文本
  const text = new fabric.Text('Hello World', {
    top: 40,
    left: 20,
    fontSize: 20,
    originX: 'center',
    originY: 'center',
  })

  // 建立群組
  const group = new fabric.Group([ellipse, text], {
    top: 50, // 整組距離頂部100
    left: 100, // 整組距離左側100
    angle: -10, // 整組旋轉-10deg
  })
  canvas.add(group)

  // 操作群組 (item參數為index)
  group.item(0).set('fill', '#015455') // 橢圓
  group.item(1).set({ text: '文字轉換', fill: '#fff' }) // 文本

  console.log('取得群組物件', group.getObjects())
  // group其他函式
  // getObjects() 返回一組中所有對象的數組
  // size() 所有對象的數量
  // contains() 檢查特定對象是否在 group 中
  // item() 組中元素
  // forEachObject() 尋訪組中對象
  // add() 添加元素對象
  // remove() 删除元素對象
  // fabric.util.object.clone() 複製
}
// 解散群組
const ungroup = () => {
  // 判斷當前有没有選中元素，如果没有就不執行任何操作
  if (!canvas.getActiveObject()) {
    return
  }

  // 判斷當前是否選中組，如果不是，就不執行任何操作
  if (canvas.getActiveObject().type !== 'group') {
    return
  }

  // 先獲取當前選中的對象，然後解除
  canvas.getActiveObject().toActiveSelection()
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
