import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './articleList.scss';
import {Link} from 'dva/router';
import Profile from '../../components/profile';
import Search from '../../components/search';
import SimpleArticle from '../../components/simpleArticle';
import {
    Button,
    Icon,
    message,
} from 'antd';


class ArticleList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className={styles.articlesBox}>
                {user.articles.map((article, index) => {
                    return <SimpleArticle article={article} key={index}/>
                })}
            </div>
        );
    }
}


export default connect(state => state)(ArticleList);
