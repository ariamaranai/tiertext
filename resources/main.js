onbeforeunload = e => e.preventDefault(),
d.onclick = async e => {
  let o = new OffscreenCanvas(2048, 4096), b = 47, w = 1148, a = 2, i = 7, n = d;
  (e = o.getContext("2d", { alpha: !1 })).fillRect(0, 0, 2048, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 20px menlo,consolas,sans-serif",
  e.textBaseline = "middle",
  e.textRendering = "optimizeLegibility";
  while (i) {
    let t = (n = n.nextSibling).textContent.slice(2).trim(--i);
    if (t &&= [...t]) {
      let m = 0, l = 53, h = 53, s = 0;
      do {
        let c = t[s];
        if (c != "\n") {
          let f = e.measureText(c).width, r = f + l;
          m = /\s/.test(c)
            ? (
              h = l = r < 2048
                ? r
                : (b += 30, 53),
              0
              )
            : (
              l = r < 2048
                ? (e.fillText(c, l, b), r)
                : (
                  (b += 30, h > 53)
                    ? (
                      e.drawImage(o, h, b - 40, m, 30, 53, b - 10, m, 30),
                      e.clearRect(h, b - 45, 2048, 30),
                      e.fillText(c, l = m + (h = 53), b),
                      w = 2160,
                      l + f
                    )
                    : (w = 2048, b, 53)
                ),
              m + f
            )
        } else (
          b += 30,
          m = 0,
          h = l = 53
        )
      } while (++s < t.length);
      e.save(w = Math.max(w, l)),
      e.fillStyle = ["#136","#068","#183","#a90","#b70","#a10","#80b"][i],
      e.fillRect(2, a, 42, m = b - a + 45),
      e.fillStyle = "#ddd",
      e.font = "600 30px serif",
      e.textAlign = "center",
      e.fillText(["𝐅","𝐄","𝐃","𝐂","𝐁","𝐀","𝐒"][i], 22, a - 2 + m / 2),
      a = b + 47,
      e.restore(b += 92)
    }
  }
  (b = new OffscreenCanvas(w += 112, a)).getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  b = (o = document.createElement("a")).href = URL.createObjectURL(await b.convertToBlob()),
  o.click(o.download = "tiertext.png"),
  URL.revokeObjectURL(b)
}