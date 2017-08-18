import React, {Component, PropTypes} from 'react';
import styles from './simpleArticle.scss';
import {Link} from 'dva/router';
import route from '../utils/route';
import {
    Icon
} from 'antd';


export default class SimpleArticle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {article} = this.props;
        return (
            <article className={styles.articleBox}>
                <header>
                    <h3><Link to={route('article', {id: article.id})}>{article.title}</Link></h3>
                    <p className={styles.time}>{article.updatedAt}</p>
                </header>
                <section className={styles.articleContentBox}>
                    <div className={styles.content}>{article.abstract}</div>
                </section>
                <footer className={styles.footerBox}>
                    <a href="javascript:;">发表评论</a>
                    <a href="javascript:;">阅读全文</a>
                </footer>
            </article>
        );
    }
}


