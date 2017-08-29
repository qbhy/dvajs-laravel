export default {
    namespace: 'editor',
    state: {
        title: '',
        content: '',
        time: '',
        date: '',

    },
    reducers: {
        save(state, {editor}){
            return {...editor};
        }
    }
};