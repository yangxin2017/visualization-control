import { Node } from '@topology/core'

export function sysYx(ctx, node) {
  ctx.beginPath()
  let img = new Image()
  img.src = node.iconTop

  if (node.pn > 8) {
    ctx.fillStyle = '#f56c6c'
  } else if (node.pn > 5) {
    ctx.fillStyle = '#e6a23c'
  } else if (node.pn > 2) {
    ctx.fillStyle = '#409eff'
  } else {
    ctx.fillStyle = '#67c23a'
  }
  ctx.strokeStyle = node.strokeStyle
  ctx.strokeWidth = 5
  ctx.fillRect(node.rect.x, node.rect.y, node.rect.width, node.rect.height)
  ctx.strokeRect(node.rect.x, node.rect.y, node.rect.width, node.rect.height)

  ctx.fillStyle = '#fff'
  ctx.font = '16px bold 黑体'
  ctx.textAlign = 'center'
  ctx.fillText(node.title, node.rect.width / 2 + node.rect.x, node.rect.y + 80)

  ctx.font = '16px bold 黑体'
  ctx.fillText('PN：' + node.pn, node.rect.width / 2 + node.rect.x, node.rect.y + 100)

  ctx.font = '16px bold 黑体'
  ctx.fillText('级别：' + node.level, node.rect.width / 2 + node.rect.x, node.rect.y + 120)

  let left = node.rect.width / 2 - 25 + node.rect.x
  let top = node.rect.y + 9

  ctx.drawImage(img, left, top, 50, 50)

  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
