d.onclick = async () => {
  let cvs = new OffscreenCanvas(2496, 4096);
  let ctx = cvs.getContext("2d", { alpha: !1 });
  let title = d.nextSibling.value;
  let p = document.body.getElementsByTagName("p");
  let top = title ? 92 : 2;
  let baseline = title ? 146 : 56;
  let maxWidth = 0;
  let i = 0;
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
          if (right < 2476) {
            ctx.fillText(c, left, baseline);
            left = right;
            wordWidth += cWidth;
          } else {
            left = 74;
            baseline += 48;
            rowHeight += 48;
            if (/s/.test(c)) {
              wordLeft = left;
            } else {
              if (wordWidth < 2486 - (64 + 8 + 2 + 8 + 2)) {
                ctx.drawImage(cvs, wordLeft, baseline - 16, wordWidth, 32, left, baseline, wordWidth, 32);
                ctx.clearRect(wordLeft, baseline - 16, wordWidth, 32);
                left += wordWidth;
              } else {
                ctx.fillText(c, left, baseline);
                // wordLeft = left + wordWidth;
                left += wordWidth;
              }
            }
          }
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
  if (title) {
    ctx.font = "600 36px menlo,consolas,monospace,yu gothic,sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(title, (maxWidth + 64) / 2, 52);
  }
  if (maxWidth) {
    let renderer = new OffscreenCanvas(maxWidth + 64, top);
    renderer.getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(cvs, 0, 0, maxWidth + 64, top));
    let url = URL.createObjectURL(await renderer.convertToBlob());
    let a = document.createElement("a");
    a.href = url;
    a.download = "download.png";
    a.click();
  }
}