import { s8, Node, createDiv, rectangle } from '@topology/core'
import * as echarts from 'echarts'

export const echartsObjs = {}

export function myCharts(ctx, node) {
  // 绘制一个底图，类似于占位符。
  rectangle(ctx, node)

  node.data = {
    echarts: {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      },
    },
  }

  if (node.elementId === undefined || node.elementId === null) {
    node.elementId = s8()
  }

  if (!node.elementLoaded) {
    echartsObjs[node.id] = {
      div: createDiv(node),
    }
    node.elementLoaded = true
    document.body.appendChild(echartsObjs[node.id].div)
    // 添加当前节点到div层
    node.addToDiv()
    echartsObjs[node.id].chart = echarts.init(echartsObjs[node.id].div, node.data.echarts.theme)
    node.elementRendered = false

    // 等待父div先渲染完成，避免初始图表控件太大
    setTimeout(() => {
      echartsObjs[node.id].chart.resize()
    })
  }

  if (!node.elementRendered) {
    // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
    setTimeout(() => {
      echartsObjs[node.id].chart.setOption(node.data.echarts.option, true)
      echartsObjs[node.id].chart.resize()
      node.elementRendered = true

      setTimeout(() => {
        const img = new Image()
        img.src = echartsObjs[node.id].chart.getDataURL({
          pixelRatio: 2,
        })
        node.img = img
      }, 100)
    })
  }
}
