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
        links.push({ title: a.textContent, href: a.href });
      }
      console.log(links);
      // リンクを表示するHTMLを作成する処理
      let html = "<ul>";
      for (const link of links) {
        html += `<li><a href="${link.href}">${link.title}</a></li>`;
      }
      html += "</ul>";
      // リンクを表示する
      document.getElementById("result").innerHTML = html;
    });
});

// ホームボタンをクリックしたときに、検索画面に戻る
document.getElementById("home-button").addEventListener("click", function() {
  window.location.href = "/";
});
