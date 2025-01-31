d.onclick = async () => {
  let b = document.body,
      cvs = new OffscreenCanvas(2496, 4096),
      e = cvs.getContext("2d", { alpha: !1 }),
      p = b.getElementsByTagName("p"),
      top = 2,
      baseline = 56,
      maxWidth = 0,
      i = 0;
  e.fillRect(0, 0, 2496, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif",
  e.textBaseline = "middle";
  do {
    let left = 74,
        rowHeight = 108,
        text = p[i].textContent.trim();
    if (text) {
      let wordWidth = 0,
          wordLeft = left,
          j = 0,
          textLen = (text = [...text]).length;
      while (j < textLen) {
        let c = text[j];
        if (c != "\n") {
          let { width, actualBoundingBoxLeft } =  e.measureText(c);
          let cWidth = width + actualBoundingBoxLeft;
          let right = left + cWidth;
          right < 2476 ? (
            e.fillText(c, left, baseline),
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
                  e.drawImage(cvs, wordLeft, baseline - 16, wordWidth, 32, left, baseline, wordWidth, 32),
                  e.clearRect(wordLeft, baseline - 16, wordWidth, 32),
                  left += wordWidth
                )
                : (
                  e.fillText(c, left, baseline),
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
      e.save(),
      e.fillStyle = ["#80b","#a10","#b70","#a90","#183","#068","#136"][i],
      e.fillRect(2, top, 64, rowHeight),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐒","𝐀","𝐁","𝐂","𝐃","𝐄","𝐅"][i], 34, top + (rowHeight / 2)),
      top += rowHeight + 2,
      baseline += 108 + 2,
      maxWidth < left && (maxWidth = left),
      e.restore()
    }
  } while (++i < 7);
  maxWidth && (
    (e = new OffscreenCanvas(maxWidth + 64, top))
      .getContext("bitmaprenderer").transferFromImageBitmap(
        await createImageBitmap(cvs, 0, 0, maxWidth + 64, height = top)
      ),
    (p = document.createElement("a")).href = URL.createObjectURL(await e.convertToBlob()),
    p.click(p.download = "")
  )
}