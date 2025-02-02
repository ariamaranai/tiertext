d.onclick = async () => {
  let o = new OffscreenCanvas(2496, 4096),
      e = o.getContext("2d", { alpha: !1 }),
      a = 2,
      b = 56,
      w = 730,
      i = 0,
      d = document,
      p = d.body.getElementsByTagName("p");
  e.fillRect(0, 0, 2496, 4096),
  e.fillStyle = "#ddd",
  e.font = "600 32px menlo,consolas,monospace,yu gothic,sans-serif",
  e.textBaseline = "middle";
  do {
    let l = 74,
        h = 108,
        t = p[i].textContent.trim();
    if (t) {
      let o = 0,
          d = l,
          n = 0,
          k = (t = [...t]).length;
      do {
        let c = t[n];
        if (c != "\n") {
          let f = e.measureText(c);
          let r = (f = f.width + f.actualBoundingBoxLeft) + l;
          r < 2476 ? (
            e.fillText(c, l, b),
            l = r,
            d += f
          ) : (
            l = 74,
            b += 48,
            h += 48,
            /s/.test(c)
              ? d = 74
              : (
              o < 2418
                  ? (
                    e.drawImage(o, d, f = b - 16, o, 32, l, b, o, 32),
                    e.clearRect(d, f, o, 32)
                  )
                  : e.fillText(c, l, b),
                l += wordWidth
              )
          )
        } else (
          l = 74,
          b += 48,
          h += 48,
          d = l
        )
      } while (++n < k)
      e.save(),
      e.fillStyle = ["#80b","#a10","#b70","#a90","#183","#068","#136"][i],
      e.fillRect(2, a, 64, h),
      e.fillStyle = "#ddd",
      e.font = "600 40px serif",
      e.textAlign = "center",
      e.fillText(["𝐒","𝐀","𝐁","𝐂","𝐃","𝐄","𝐅"][i], 34, a + h / 2),
      a += h + 2,
      b += 110,
      w < l && (w = l),
      e.restore()
    }
  } while (++i < 7);
  (e = new OffscreenCanvas(w += 110, a))
    .getContext("bitmaprenderer").transferFromImageBitmap(await createImageBitmap(o, 0, 0, w, a)),
  (p = d.createElement("a")).href = URL.createObjectURL(await e.convertToBlob()),
  p.click(p.download = "")
}