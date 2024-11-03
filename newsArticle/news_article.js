var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET',url,true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var headline = document.createElement('p');
        headline.textContent = article.headline;

        var infoTitle = document.createElement('h3');
        infoTitle.textContent = 'Information';

        var infoList = document.createElement('ul');
        article.info.forEach(function(info) {
            var infoItem = document.createElement('li');
            infoItem.textContent = info;
            infoList.appendChild(infoItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(headline);
        articleDiv.appendChild(infoTitle);
        articleDiv.appendChild(infoList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();