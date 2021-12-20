import { Node } from '@topology/core'

export function DCSTopBar(ctx, node) {
  ctx.beginPath()
  let edgeWidth = 14
  // node.rect.x, node.rect.y, node.rect.width, node.rect.height
  ctx.moveTo(node.rect.x, node.rect.y)
  ctx.lineTo(node.rect.x + node.rect.width, node.rect.y)
  ctx.lineTo(node.rect.x + node.rect.width - edgeWidth, node.rect.y + node.rect.height)
  ctx.lineTo(node.rect.x + edgeWidth, node.rect.y + node.rect.height)
  ctx.closePath()
  console.log('node.rect')
  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
