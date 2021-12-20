import { Node } from '@topology/core'

export function myShape(ctx, node) {
  const wr = node.rect.width * node.borderRadius
  const hr = node.rect.height * node.borderRadius
  ctx.beginPath()
  node.fillStyle = 'red'
  node.strokeStyle = 'blue'
  ctx.arc(node.rect.x, node.rect.y, node.rect.width, 0, Math.PI * 2, false)

  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
