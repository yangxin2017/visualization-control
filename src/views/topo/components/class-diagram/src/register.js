import { registerNode } from '@topology/core'
import { simpleClass, simpleClassIconRect, simpleClassTextRect, interfaceClass, interfaceClassIconRect, interfaceClassTextRect } from './class'

import { myShape } from './myshape/mshape'
import { myImg } from './tools/myimg/myimg'
import { myCharts } from './charts/charts'
import { sysYx } from './sysyx/sysyx'
import { sysCircle } from './syscircle/syscircle'
import { sysYU, interfaceYUIconRect } from './logic/yu'
import { sysHUO, interfaceHUOIconRect } from './logic/huo'
import { sysFEI, interfaceFEIIconRect } from './logic/fei'
import { sysErJiGuan } from './dustury/erjiguan'
import { DCSTopBar } from './dcs-status/top-bar'
import { DCSLeftBar } from './dcs-status/left-bar'

export function register() {
  registerNode('simpleClass', simpleClass, null, simpleClassIconRect, simpleClassTextRect)
  registerNode('interfaceClass', interfaceClass, null, interfaceClassIconRect, interfaceClassTextRect)
  registerNode('myshape', myShape, null)
  registerNode('myImg', myImg, null)
  registerNode('myChart', myCharts, null)
  registerNode('sysYx', sysYx, null)
  registerNode('sysCircle', sysCircle, null)
  registerNode('sysYU', sysYU, interfaceYUIconRect)
  registerNode('sysHUO', sysHUO, interfaceHUOIconRect)
  registerNode('sysFEI', sysFEI, interfaceFEIIconRect)
  registerNode('sysErJiGuan', sysErJiGuan, null)
  registerNode('DCSTopBar', DCSTopBar, null)
  registerNode('DCSLeftBar', DCSLeftBar, null)
}
