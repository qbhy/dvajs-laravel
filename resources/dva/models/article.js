import {delay} from '../utils';
import fetchArticle from '../services/fetchArticle';

export default {
    namespace: 'article',
    state: {
        list: {},
        activeIndex: null,
        loading: true,
    },
    reducers: {
        add(state, {article}){
            state.list[article.id] = article;
            state.activeIndex = article.id;
            state.loading = false;
            return {...state};
        },
        go(state, {index}){
            if (state.list[index]) {
                state.activeIndex = index;
            } else {
            }
            state.loading = false;
            return {...state};
        }
    },
    effects: {},
    subscriptions: {}

};