onbeforeunload = e => e.preventDefault();
d.onclick = async e => {
  let o = new OffscreenCanvas(2160, 4096), b = 60, w = 792, a = 2, i = 7, n = d;
  (e = o.getContext("2d", { alpha: !1 })).fillRect(0, 0, 2160, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif",
  e.textBaseline = "middle";
  while (i) {
    let t = (n = n.nextSibling).textContent.slice(2).trim(--i);
    if (t &&= [...t]) {
      let wordWidth = 0, l = 74, wordLeft = 74, k = 0;
      do {
        let c = t[k];
        if (c != "\n") {
          if (c != "\r") {
            let f = e.measureText(c), r = (f = f.width + f.actualBoundingBoxLeft) + l;
            wordWidth = /\s/.test(c)
              ? (
                wordLeft = l = r < 2152
                  ? r
                  : (b += 48, 74),
                0
                )
              : (
                l = r < 2152
                  ? (e.fillText(c, l, b), r)
                  : (
                    wordLeft > 74
                      ? (
                        e.drawImage(o, wordLeft, w = (b += 48) - 64, wordWidth, 32, 74, b - 16, wordWidth, 32),
                        e.clearRect(wordLeft, w, wordWidth, 32),
                        e.fillText(c, l = wordWidth + (wordLeft = 74), b),
                        w = 2160,
                        l + f
                      )
                      : (b += 48, 74)
                  ),
                wordWidth + f
              )
          }
        } else (
          b += 48,
          wordWidth = 0,
          wordLeft = l = 74
        )
      } while (++k < t.length)
      e.save(w = Math.max(w, l)),
      e.fillStyle = ["#136","#068","#183","#a90","#b70","#a10","#80b"][i],
      e.fillRect(2, a, 64, wordWidth = b - a + 48),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐅","𝐄","𝐃","𝐂","𝐁","𝐀","𝐒"][i], 34, a + wordWidth / 2),
      a = b + 50,
      e.restore(b += 110)
    }
  }
  (b = new OffscreenCanvas(w += 48, a)).getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  b = (o = document.createElement("a")).href = URL.createObjectURL(await b.convertToBlob()),
  o.click(o.download = "tiertext.png"),
  URL.revokeObjectURL(b)
}