<template>
  <div class="flex flex-wrap p-18 gap-20">
    <div>
      <p>JSON to 畫布</p>
      <canvas width="350" height="350" id="c1" style="border: 1px solid #ccc"></canvas>
    </div>
    <div>
      <p>JSON to 畫布 2</p>
      <canvas width="350" height="350" id="c2" style="border: 1px solid #ccc"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

const init = () => {
  const str =
    '{"version": "5.4.2","objects": [{"type": "rect","version": "5.4.2","originX": "left","originY": "top","left": 100,"top": 100,"width": 100,"height": 100,"fill": "orange","stroke": null,"strokeWidth": 1,"strokeDashArray": null,"strokeLineCap": "butt","strokeDashOffset": 0,"strokeLineJoin": "miter","strokeUniform": false,"strokeMiterLimit": 4,"scaleX": 1,"scaleY": 1,"angle": 0,"flipX": false,"flipY": false,"opacity": 1,"shadow": null,"visible": true,"backgroundColor": "","fillRule": "nonzero","paintFirst": "fill","globalCompositeOperation": "source-over","skewX": 0,"skewY": 0,"rx": 0,"ry": 0}]}'
  const str2 =
    '{"version":"5.4.2","objects":[{"type":"rect","version":"5.4.2","originX":"left","originY":"top","left":50,"top":50,"width":20,"height":20,"fill":"green","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"rx":0,"ry":0},{"type":"circle","version":"4.6.0","originX":"left","originY":"top","left":80,"top":80,"width":80,"height":80,"fill":"red","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"radius":40,"startAngle":0,"endAngle":6.283185307179586}],"background":"#ddd"}'

  const canvas = new fabric.Canvas('c1')
  // 反序列化
  canvas.loadFromJSON(str)
  const canvas2 = new fabric.Canvas('c2')
  // 反序列化
  canvas2.loadFromJSON(str2)
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
