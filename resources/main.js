onbeforeunload = e => e.preventDefault(),
d.onclick = async e => {
  let o = new OffscreenCanvas(2160, 4096), b = 60, w = 1150, a = 2, i = 7, n = d;
  (e = o.getContext("2d", { alpha: !1 })).fillRect(0, 0, 2160, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,yu gothic,sans-serif",
  e.textBaseline = "middle";
  while (i) {
    let t = (n = n.nextSibling).textContent.slice(2).trim(--i);
    if (t &&= [...t]) {
      let m = 0, l = 74, h = 74, s = 0;
      do {
        let c = t[s];
        if (c != "\n") {
          if (c != "\r") {
            let f = e.measureText(c), r = (f = f.width + f.actualBoundingBoxLeft) + l;
            m = /\s/.test(c)
              ? (
                h = l = r < 2152
                  ? r
                  : (b += 48, 74),
                0
                )
              : (
                l = r < 2152
                  ? (e.fillText(c, l, b), r)
                  : (
                    h > 74
                      ? (
                        e.drawImage(o, h, w = (b += 48) - 64, m, 32, 74, b - 16, m, 32),
                        e.clearRect(h, w, 2072, 32),
                        e.fillText(c, l = m + (h = 74), b),
                        w = 2160,
                        l + f
                      )
                      : (b += 48, w = 2160, 74)
                  ),
                m + f
              )
          }
        } else (
          b += 48,
          m = 0,
          h = l = 74
        )
      } while (++s < t.length);
      e.save(w = Math.max(w, l)),
      e.fillStyle = ["#136","#068","#183","#a90","#b70","#a10","#80b"][i],
      e.fillRect(2, a, 64, m = b - a + 48),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐅","𝐄","𝐃","𝐂","𝐁","𝐀","𝐒"][i], 34, a + m / 2),
      a = b + 50,
      e.restore(b += 110)
    }
  }
  (b = new OffscreenCanvas(w += 110, a)).getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  b = (o = document.createElement("a")).href = URL.createObjectURL(await b.convertToBlob()),
  o.click(o.download = "tiertext.png"),
  URL.revokeObjectURL(b)
}