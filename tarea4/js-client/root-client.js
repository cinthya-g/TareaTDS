document.getElementById('searchButton').addEventListener('click', function() {
    const keyword = document.getElementById('searchInput').value.trim();
    const token = localStorage.getItem('token');
    
    if (keyword) {
        // update the url with the current keyword param to avoid losing results after reloading
        history.pushState({}, null, `/?keyword=${encodeURIComponent(keyword)}&token=${encodeURIComponent(token)}`);
        performSearch(keyword, token); 
    }
});

function performSearch(keyword, token) {
    fetch(`/${encodeURIComponent(keyword)}?token=${encodeURIComponent(token)}`)
    .then(response => response.json())
    .then(data => {
        var newsContainer = document.getElementById('mainNewsContainer');
        newsContainer.innerHTML = ''; // Clear existing content
        data.news_results.forEach(news => {
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${news.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                    <a href="${news.url}" class="btn btn-primary" target="_blank">
                        Read more
                    </a>
                </div>
            `;
            newsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching news:', error));
}

// looks for previous keyword and token in the url to perform a search automatically
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('keyword');
    const token = localStorage.getItem('token');
    
    if (keyword && token) {
        document.getElementById('searchInput').value = keyword; 
        performSearch(keyword, token); 
    }
});
