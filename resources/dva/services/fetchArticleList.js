import fetch from '../utils/network';
import {message} from 'antd';

export default (page = 1) => {
    return fetch(`/api/fetchArticleList?page=${page}`);
}