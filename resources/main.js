onbeforeunload = e => e.preventDefault(),
d.onclick = async e => {
  let o = new OffscreenCanvas(2160, 4096), b = 60, w = 990, a = 2, i = 7, n = d;
  (e = o.getContext("2d", { alpha: !1 })).fillRect(0, 0, 2160, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,sans-serif",
  e.textBaseline = "middle",
  e.textRendering = "optimizeLegibility";
  while (i) {
    let t = (n = n.nextSibling).textContent.slice(2).trim(--i);
    if (t &&= [...t]) {
      let m = 0, l = 78, h = 78, s = 0;
      do {
        let c = t[s];
        if (c != "\n") {
          let f = e.measureText(c).width, r = f + l;
          m = /\s/.test(c)
            ? (
              h = l = r < 2160
                ? r
                : (b += 48, 78),
              0
              )
            : (
              l = r < 2160
                ? (e.fillText(c, l, b), r)
                : (
                  (b += 48, h > 78)
                    ? (
                      e.drawImage(o, h, b - 64, m, 32, 78, b - 16, m, 32),
                      e.fillStyle = "#000",
                      e.fillRect(h, b - 68, 2078, 36),
                      e.fillStyle = "#ddd",
                      e.fillText(c, l = m + (h = 78), b),
                      w = 2160,
                      l + f
                    )
                    : (w = 2160, b, 78)
                ),
              m + f
            )
        } else (
          b += 48,
          m = 0,
          h = l = 78
        )
      } while (++s < t.length);
      e.save(w = Math.max(w, l)),
      e.fillStyle = ["#136","#068","#183","#a90","#b70","#a10","#80b"][i],
      e.fillRect(2, a, 64, m = b - a + 48),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐅","𝐄","𝐃","𝐂","𝐁","𝐀","𝐒"][i], 34, a + m / 2),
      e.restore(b = (a = b + 50) + 60)
    }
  }
  (b = new OffscreenCanvas(w += 100, a)).getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  b = (o = document.createElement("a")).href = URL.createObjectURL(await b.convertToBlob()),
  o.click(o.download = "tiertext.png"),
  URL.revokeObjectURL(b)
}