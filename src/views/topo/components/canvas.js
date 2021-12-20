import { register as registerFlow } from '@topology/flow-diagram'
import { register as registerActivity } from '@topology/activity-diagram'
import { register as registerSequence } from '@topology/sequence-diagram'

import { register as registerClass } from './class-diagram/index'
import { register as registerChart } from '@topology/chart-diagram'
import * as echarts from 'echarts'
require('echarts-liquidfill')

export function canvasRegister() {
  registerFlow()
  registerActivity()
  registerSequence()
  registerClass()
  registerChart(echarts)
}
