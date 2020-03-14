const axios = require('axios');

export const fetchSubtopics = async (topic) => {
    try {
        const result = await axios({
            method: 'post',
            url: 'https://tws-node-server.herokuapp.com/subtopics',
            data: { nSubtopics: 18, topic: topic },
            headers: { twsKey: process.env.REACT_APP_TWS_KEY }
        });
        return result.data; //result.data is an array of strings, the subtopics
    } catch (err) {
        console.log(err);
    }
};

export const fetchArticleIds = async (query) => {
    try {
        const result = await axios({
            method: 'post',
            url: 'https://tws-node-server.herokuapp.com/articleIds',
            data: { nArticles: 10, query: query },
            headers: { twsKey: process.env.REACT_APP_TWS_KEY }
        });
        return result.data; //result.data is an array of ints, the articleId s
    } catch (err) {
        console.log(err);
    }
};

export const fetchArticlesById = async (ids) => {
    try {
        const result = await axios({
            method: 'post',
            url: 'https://tws-node-server.herokuapp.com/articlesById',
            data: { ids: ids },
            headers: { twsKey: process.env.REACT_APP_TWS_KEY }
        });
        return result.data; //result.data is an array of objects, each object is an article
    } catch (err) {
        console.log(err);
    }
};
