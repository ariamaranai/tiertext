d.onclick = async () => {
  let a = document;
  let b = a.body;
  if (d.textContent != "✖") {
    let cvs = new OffscreenCanvas(2496, 4096);
    let ctx = cvs.getContext("2d", { alpha: !1 });
    let p = b.getElementsByTagName("p");
    let top = 2;
    let baseline = 56;
    let maxWidth = 0;
    let i = 0;
    ctx.fillRect(0, 0, 2496, 4096);
    ctx.fillStyle = "#ddd";
    ctx.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif";
    ctx.textBaseline = "middle";
    while (i < 7) {
      let left = 74;
      let rowHeight = 108;
      let text = p[i].textContent.trim();
      if (text) {
        let wordWidth = 0;
        let wordLeft = left;
        let j = 0;
        let textLen = (text = [...text]).length;
        while (j < textLen) {
          let c = text[j];
          if (c != "\n") {
            let { width, actualBoundingBoxLeft } =  ctx.measureText(c);
            let cWidth = width + actualBoundingBoxLeft;
            let right = left + cWidth;
            right < 2476 ? (
              ctx.fillText(c, left, baseline),
              left = right,
              wordWidth += cWidth
            ) : (
              left = 74,
              baseline += 48,
              rowHeight += 48,
              /s/.test(c)
                ? wordLeft = left
                : wordWidth < 2486 - (64 + 8 + 2 + 8 + 2)
                  ? (
                    ctx.drawImage(cvs, wordLeft, baseline - 16, wordWidth, 32, left, baseline, wordWidth, 32),
                    ctx.clearRect(wordLeft, baseline - 16, wordWidth, 32),
                    left += wordWidth
                  )
                  : (
                    ctx.fillText(c, left, baseline),
                    left += wordWidth
                  )
            )
          } else (
            left = 74,
            baseline += 48,
            rowHeight += 48,
            wordLeft = left
          )
          ++j
        }
        ctx.save();
        ctx.fillStyle = ["#80b","#a10","#b70","#a90","#183","#068","#136"][i];
        ctx.fillRect(2, top, 64, rowHeight);
        ctx.fillStyle = "#ddd";
        ctx.font = "600 40px serif";
        ctx.textAlign = "center";
        ctx.fillText(["𝐒","𝐀","𝐁","𝐂","𝐃","𝐄","𝐅"][i], 34, top + (rowHeight / 2));
        top += rowHeight + 2;
        baseline += 108 + 2;
        maxWidth < left && (maxWidth = left);
        ctx.restore();
      }
      ++i;
   }
    if (maxWidth) {
      let result = document.createElement("canvas");
      result.getContext("bitmaprenderer").transferFromImageBitmap(
          await createImageBitmap(cvs, 0, 0, result.width = maxWidth + 64, result.height = top)
        );
      document.body.appendChild(result).setAttribute("style", "position:fixed;top:54;width:1248;height:4096;opacity:0");
      d.textContent = "✖";
    }
  } else b.lastChild.remove(d.textContent = "⇣DOWNLOAD")
}