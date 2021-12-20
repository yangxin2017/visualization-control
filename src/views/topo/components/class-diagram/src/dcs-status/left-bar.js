import { Node } from '@topology/core'

export function DCSLeftBar(ctx, node) {
  ctx.beginPath()
  // node.rect.x, node.rect.y, node.rect.width, node.rect.height
  ctx.moveTo(node.rect.x, node.rect.y)
  let cpx = node.rect.x + node.rect.width / 4
  let cpy = node.rect.y - 5
  let cpx2 = node.rect.x + (node.rect.width * 3) / 4
  let cpy2 = node.rect.y + 3
  ctx.quadraticCurveTo(cpx, cpy, node.rect.x + node.rect.width / 2, node.rect.y)
  ctx.quadraticCurveTo(cpx2, cpy2, node.rect.x + node.rect.width, node.rect.y)

  ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height)
  ctx.lineTo(node.rect.x, node.rect.y + node.rect.height)
  ctx.closePath()
  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
