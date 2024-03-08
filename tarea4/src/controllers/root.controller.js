const ResponseStatus = require('../utils/response-status');
const axios = require('axios');
NEWS_URL = 'https://newsapi.org/v2/';

class RootController {

    
    filterNews (req, res) {
        const keyword = encodeURIComponent(req.params.keyword);
        console.log('keyword', keyword);
        const apiKey = process.env.NEWS_API_KEY;
        const url = `${NEWS_URL}everything?q=${keyword}&apiKey=${apiKey}`;
        axios.get(url)
        .then(response => {
            res.json({
                news_results: response.data.articles,
                total_news: response.data.totalResults
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            res.status(500).json({ error: 'Error fetching news' });
        });
    }

}

module.exports = new RootController();