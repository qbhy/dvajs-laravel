import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './article.scss';
import fetchArticle from '../../services/fetchArticle';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    getArticle() {
        const articleModel = this.props.article;
        if (articleModel.activeIndex !== null && articleModel.list[articleModel.activeIndex]) {
            return articleModel.list[articleModel.activeIndex];
        }
        const id = this.props.params.id;
        fetchArticle(id).then(article => {
            this.props.dispatch({type: 'article/add', article});
        });
        return null;
    }

    render() {
        const article = this.getArticle(),
            loading = this.props.article.loading;
        if (loading && article) {
            return (
                <div>
                    文章 啦啦啦
                </div>
            );
        } else {
            return (
                <div>
                    文章正在加载中...
                </div>
            );
        }

    }
}

export default connect(state => state)(Article)
