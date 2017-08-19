import fetch from '../utils/network';

export default (id) => {
    return fetch('/api/fetchArticle', {id}).then(({article}) => article);
}