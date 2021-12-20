import { Node } from '@topology/core'

export function sysCircle(ctx, node) {
  ctx.beginPath()

  node.text = node.t1 + '/' + node.t2
  let mx = node.rect.x + node.rect.width / 2
  let my = node.rect.y + node.rect.height / 2
  ctx.arc(mx, my, node.rect.width / 2, 0, Math.PI * 2, false)

  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
