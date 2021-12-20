<template>
  <div class="prev-container">
    <div id="topology-canvas-v1" class="full"></div>
  </div>
</template>

<script>
import { Topology, Lock } from '@topology/core'
import { canvasRegister } from './topo/components/canvas'
export default {
  components: {},
  props: {
    jsonData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      canvas: null,
      intervals: {},
      tickNum: 1,
      globalInterval: null,
    }
  },
  created() {
    canvasRegister()
    this.clearGlobalInterval()
    this.globalInterval = setInterval(() => {
      this.tickNum++
      if (this.tickNum > 9999) {
        this.tickNum = 0
      }
      for (let ks in this.intervals) {
        let k = parseInt(ks)
        if (this.tickNum % k === 0) {
          let arrFun = this.intervals[ks]
          for (let af of arrFun) {
            af.method(af)
          }
        }
      }
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.initInfo()
    }, 300)
  },
  methods: {
    async initInfo() {
      this.canvas = new Topology('topology-canvas-v1', {
        scaleKey: -1,
        translateKey: -1,
        disableMoveOutParent: true,
        scroll: false,
        // disableScale: true,
        on: (tp, ev) => {
          if (tp === 'node') {
            console.log(ev)
          }
        },
      })
      try {
        this.canvas.open(this.jsonData)
        this.canvas.lock(Lock.NoEvent)
        this.canvas.fitView()
        // 加载接口方法
        this.initInterface(this.canvas.data)
      } catch (e) {
        console.log(e)
        return false
      }

      this.canvas.ondblclick(e => {
        console.log(e)
      })
    },

    initInterface(data) {
      let pens = data.pens
      for (let p of pens) {
        if (p.data && p.data.interface) {
          this.orgFuncs(p)
        }
      }
    },
    orgFuncs(pen) {
      let dataInterface = pen.data.interface
      if (dataInterface.type === 'http') {
        let url = dataInterface.url
        // 函数体
        let func = {
          url: url,
          method: getTestFunction,
          pen: pen,
          callback: this.execCallback,
        }
        if (dataInterface.iscircle) {
          if (!this.intervals[dataInterface.interval]) {
            this.intervals[dataInterface.interval] = []
          }
          this.intervals[dataInterface.interval].push(func)
        } else {
          // exec once
          func.method(func)
        }
      } else if (dataInterface.type === 'websocket') {
        // TODO ...
      }
    },
    execCallback(data, pen) {
      let status = pen.data.interface.status
      let finStatus = null
      for (let s of status) {
        if (s.isEqual && s.minVal === data) {
          finStatus = s
          break
        } else if (!s.isEqual && s.minVal <= data && s.maxVal > data) {
          finStatus = s
          break
        }
      }
      if (finStatus) {
        if (finStatus.bindText) {
          pen.text = data
        }
        pen.strokeStyle = finStatus.strokeColor
        pen.lineWidth = finStatus.strokeWidth
        pen.fontColor = finStatus.textColor
        pen.fillStyle = finStatus.backgroundColor
        this.canvas.updateProps(false, [pen])
      }
    },
    clearGlobalInterval() {
      if (this.globalInterval) {
        clearInterval(this.globalInterval)
      }
      console.log('clear interval')
    },
  
  },
  beforeDestroy() {
    this.clearGlobalInterval()
  },

  
}
</script>

<style scoped>
.prev-container {
  width: 100%;
  height: 100%;
}
.full {
  width: 100%;
  height: 100%;
}
#topology-canvas-v1{
  width: 100%;
  height: 100%;
}
</style>