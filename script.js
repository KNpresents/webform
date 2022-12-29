document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const url = document.getElementById("url").value;
  fetch(url)
    .then(response => response.text())
    .then(html => {
      // HTMLコードからリンクを抽出する処理
      const links = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const aElements = doc.querySelectorAll("a");
      for (const a of aElements) {
        links.push(a.href);
      }
      console.log(links);
      // リンクを表示するHTMLを作成する処理
      let html = "<ul>";
      for (const link of links) {
        html += `<li><a href="${link}">${link}</a></li>`;
      }
      html += "</ul>";
      // リンクを表示する
      document.body.innerHTML = html;
    });
});
