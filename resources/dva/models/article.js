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
<<<<<<< HEAD
            console.log(state);
            return {list: state.list, activeIndex: state.activeIndex, loading: false};
=======
            state.loading = false;
            return {...state};
>>>>>>> 82d0838558c5dc8a2854945fbff82ec31b820e3e
        },
        go(state, {index}){
            if (state.list[index]) {
                state.activeIndex = index;
            } else {
            }
            return {...state};
        }
    },
    effects: {},
    subscriptions: {}

};