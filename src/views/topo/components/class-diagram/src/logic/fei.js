import { Node, Point, Direction } from '@topology/core'

export function sysFEI(ctx, node) {
  ctx.beginPath()
  var imgSrc = require('@/assets/image/icon-imgs/fei.jpg')
  let img = new Image()
  img.src = imgSrc
  ctx.drawImage(img, node.rect.x, node.rect.y, node.rect.width, node.rect.height)

  // 必须判空再填充
  ctx.fill()
  ctx.stroke()
}

export function interfaceFEIIconRect(node) {
  node.anchors = []
  let p = new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up)
  node.anchors.push(p)

  let x1 = node.rect.x + node.rect.width * 0.5
  let p2 = new Point(x1, node.rect.y + node.rect.height, Direction.Bottom)
  node.anchors.push(p2)
}
