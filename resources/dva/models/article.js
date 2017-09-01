import {delay} from '../utils';

export default {
    namespace: 'article',
    state: {
        list: {},
        activeIndex: null,
        initialised: false,
        loading: false,
        page: 1,
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
        },
        init(state, {articles, page}){
            state.list = articles;
            state.page = page;
            state.loading = false;
            state.initialised = true;
            return {...state};
        },
        loading(state, {loading}){
            state.loading = loading;
            return {...state};
        }
    },
    effects: {},
    subscriptions: {}

};