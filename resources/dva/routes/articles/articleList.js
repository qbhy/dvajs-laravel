import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './articleList.scss';
import SimpleArticle from '../../components/simpleArticle';


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

    render() {
        const {article} = this.props;
        return (
            <div className={styles.articlesBox}>
                {ArticleList.renderArticles(article.list)}
            </div>
        );
    }
}


export default connect(state => state)(ArticleList);
