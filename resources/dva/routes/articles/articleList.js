import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './articleList.scss';
import SimpleArticle from '../../components/simpleArticle';
import is from 'is_js';
import {Link} from 'dva/router';
import route from '../../utils/route';
import fetchArticleListService from '../../services/fetchArticleList';
import delay from '../../utils/delay';
import queryParams from '../../utils/queryParams';
import {message, Spin} from 'antd';

class ArticleList extends Component {

    constructor(props) {
        super(props);
    }

    static renderArticles(articles) {
        const dom = [];
        for (let key in articles) {
            dom.push(<SimpleArticle key={key} article={articles[key]}/>);
        }
        return dom;
    }

    hasArticle() {
        return is.not.array(this.props.article.list);
    }

    componentWillMount() {
        const {article, dispatch} = this.props;
        if (article.initialised === false) {
            dispatch({type: 'article/loading', loading: true});
            fetchArticleListService(queryParams('page', 1)).then(({articles, page}) => {
                dispatch({type: 'article/init', articles, page});
            });
        }
    }

    render() {
        const {article} = this.props;
        if (this.hasArticle()) {
            return (
                <div className={styles.articlesBox}>
                    {ArticleList.renderArticles(article.list)}
                </div>
            );
        }
        return (
            <div className={styles.articlesBox}>
                <div className={styles.none}>
                    <h1>没有文章,去 <Link to={route('home')}>首页</Link> 看看吧</h1>
                </div>
            </div>
        );
    }
}


export default connect(state => state)(ArticleList);