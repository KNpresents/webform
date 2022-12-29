document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.querySelector('#url').value;
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var links = [];
      var parser = new DOMParser();
      var html = parser.parseFromString(xhr.responseText, 'text/html');
      var elements = html.querySelectorAll('a');
      for (var i = 0; i < elements.length; i++) {
        links.push(elements[i].href);
      }
      var list = document.createElement('ul');
      for (var i = 0; i < links.length; i++) {
        var item = document.createElement('li');
        item.textContent = links[i];
        list.appendChild(item);
      }
      document.body.appendChild(list);
    };
    xhr.open('GET', url);
    xhr.send();
  });
  