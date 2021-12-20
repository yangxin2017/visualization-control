import { Node } from '@topology/core'

export function myImg(ctx, node) {
  ctx.beginPath()
  var imgSrc = node.image
  let img = new Image()
  img.src = imgSrc
  ctx.drawImage(img, node.rect.x, node.rect.y, node.rect.width, node.rect.height)

  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}
