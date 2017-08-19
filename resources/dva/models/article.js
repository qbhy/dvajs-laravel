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
            console.log(state);
            return {list: state.list, activeIndex: state.activeIndex, loading: false};
        },
        go(state, {index}){
            if (state.list[index]) {
                state.activeIndex = index;
            } else {
                console.log('文章不存在');
            }
            return state;
        }
    },
    effects: {},
    subscriptions: {}

};