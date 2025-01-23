d.onclick = async () => {
  let cvs = new OffscreenCanvas(2496, 2496);
  let ctx = cvs.getContext("2d", { alpha: !1 });
  let title = d.nextSibling.value;
  let p = document.body.getElementsByTagName("p"); 
  let top = 2;
  let baseline = 2 + 54;
  let maxWidth = 0;
  let rank = ["𝐒","𝐀","𝐁","𝐂","𝐃","𝐄","𝐅"];
  let color = ["#b32","#c83","#ba0","#6a2","#193","#237","#47a"];

  ctx.textBaseline = "middle";

  if (title) {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, 2496, 108);
    ctx.fillStyle = "#ddd";
    ctx.font = "600 40px menlo,consolas,monospace,yu gothic,sans-serif";
    for (let i = 0, left = 32; i < title.length; ++i) {
      let c = title[i];
      let metrics = ctx.measureText(c);
      ctx.fillText(c, left, 56);
      left += metrics.width + metrics.actualBoundingBoxLeft;
    }
    top = 110;
    baseline = 164;
  } else {
    ctx.fillStyle = "#ddd";
  }

  for (let i = 0; i < 7; ++i) {
    let left = 64 + 8;
    let height = 108;
    let text = p[i].textContent;
    if (text) {
      ctx.textAlign = "left";
      ctx.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif";
      for (let j = 0; j < text.length; ++j) {
        let c = text[j];
        if (c != "\n") {
          let metrics = ctx.measureText(c);
          let right = left + metrics.width + (metrics.actualBoundingBoxLeft);
          if (right < 2496) {
            ctx.fillText(c, left, baseline);
            left = right;
          } else {
            ctx.fillText(c, left = 64 + 8, baseline += 48);
          }
        } else {
          left = 64 + 8;
          baseline += 48;
          height += 48;
        }
      }
      ctx.fillStyle = color[i];
      ctx.fillRect(2, top, 64, height);
      ctx.fillStyle = "#ddd";
      ctx.font = "600 36px menlo,consolas,monospace,yu gothic,sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(rank[i], 34, top + (height / 2));
      top += height + 2;
      baseline += 108 + 2;
      maxWidth < left && (maxWidth = left);
    }
  }
  if (maxWidth) {
    let renderer = new OffscreenCanvas(maxWidth + 8, top);
    renderer.getContext("bitmaprenderer").transferFromImageBitmap(
      await createImageBitmap(cvs, 0, 0, maxWidth + 16, top)
    );
    let url = URL.createObjectURL(await renderer.convertToBlob());
    let a = document.createElement("a");
    a.href = url;
    a.download = "download.png";
    a.click();
  }
}