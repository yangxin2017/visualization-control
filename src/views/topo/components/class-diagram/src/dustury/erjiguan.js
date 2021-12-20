import { Node, Point, Direction } from '@topology/core'

export function sysErJiGuan(e, t) {
  e.beginPath()
  var n = t.rect.width / 5
  e.moveTo(t.rect.x + n, t.rect.y),
    e.lineTo(t.rect.x + t.rect.width - n, t.rect.y),
    e.lineTo(t.rect.x + t.rect.width, t.rect.y + t.rect.height / 2),
    e.lineTo(t.rect.x + t.rect.width - n, t.rect.y + t.rect.height),
    e.lineTo(t.rect.x + n, t.rect.y + t.rect.height),
    e.lineTo(t.rect.x, t.rect.y + t.rect.height / 2),
    e.closePath(),
    (t.fillStyle || t.bkType) && e.fill(),
    e.stroke()
}
