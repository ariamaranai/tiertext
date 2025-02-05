onbeforeunload = e => e.preventDefault(),
d.onclick = async () => {
  let o = new OffscreenCanvas(2160, 4096),
      e = o.getContext("2d", { alpha: !1 }),
      a = 2,
      b = 60,
      w = 792,
      i = 7,
      n = d;
  e.fillRect(0, 0, 2160, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif",
  e.textBaseline = "middle";
  while (i) {
    let l = 74,
        h = 108,
        t = (n = n.nextSibling).textContent.slice(2).trim(),
        wordWidth = 0,
        wordLeft = 74,
        k = 0;
    --i;
    if (t &&= [...t]) {
      do {
        let c = t[k];
        if (c != "\n") {
          if (c != "\r") {
            let f = e.measureText(c);
            let r = (f = f.width + f.actualBoundingBoxLeft) + l;
            wordWidth = /\s/.test(c)
              ? (
                wordLeft = l = r < 2152
                  ? l + f
                  : (b += 48, h += 48, 74),
                  0
                )
              : (
                l = r < 2152
                  ? (e.fillText(c, l, b), r)
                  : (
                    wordWidth < 2072
                      ? (
                        h += 48,
                        e.drawImage(o, wordLeft, (b += 48) - 64, wordWidth, 32, 74, b - 16, wordWidth, 32),
                        e.clearRect(wordLeft, b - 64, wordWidth, 32),
                        e.fillText(c, l = wordWidth + (wordLeft = 74), b),
                        w = 2160,
                        l + f
                      )
                      : (
                        b += 48,
                        h += 48,
                        74
                      )
                  ),
                wordWidth + f
              )
          }
        } else (
          wordWidth = 0,
          wordLeft = l = 74,
          b += 48,
          h += 48
        )
      } while (++k < t.length)
      e.save(),
      e.fillStyle = ["#136","#068","#183","#a90","#b70","#a10","#80b"][i],
      e.fillRect(2, a, 64, h),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐅","𝐄","𝐃","𝐂","𝐁","𝐀","𝐒"][i], 34, a + h / 2),
      a += h + 2,
      b += 110,
      e.restore(w < l && (w = l))
    }
  }
  (e = new OffscreenCanvas(w += 48, a)).getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  e = (o = document.createElement("a")).href = URL.createObjectURL(await e.convertToBlob()),
  o.click(o.download = "tiertext.png"),
  URL.revokeObjectURL(e)
}