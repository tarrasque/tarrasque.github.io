function mousePressOnCanvas(canvas) {
  if (
    mouseX > canvas.elt.offsetLeft &&
    mouseX < canvas.elt.offsetLeft + canvas.width &&
    mouseY > canvas.elt.offsetTop &&
    mouseY < canvas.elt.offsetTop + canvas.height
  ) {
    return true;
  }
  return false;
}