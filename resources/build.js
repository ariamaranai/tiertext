let css = (await Bun.file("main.css").text())
  .replace(/\n| {2}|\s(?={)|(?<=\:)\s/g, "");
let js = (await Bun.file("main.js").text())
  .replace(/(?<!let)\s/g, "")
  .replace("(^|)", "(^| )")
  .replace("asynce", "async e");
let html = (await Bun.file("main.htm").text())
  .replaceAll("\n", "")
  .replace("/*css*/", css);
Bun.write("../s.js", js);
Bun.write("../index.htm", html);
console.log(`html size: ${Bun.gzipSync(Buffer.from(html)).length}`);
console.log(`js size: ${Bun.gzipSync(Buffer.from(js)).length}`);