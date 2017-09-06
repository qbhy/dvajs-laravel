import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './article.scss';
import fetchArticleService from '../../services/fetchArticle';
import {Link} from 'dva/router';
import delay from '../../utils/delay';
import classNames from 'classnames';
import {Icon, BackTop} from 'antd';
import Comment from '../../components/comment';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    getArticle() {
        const articleModel = this.props.article;
        const id = this.props.params.id;
        const article = articleModel.list[id];
        if (id && article) {
            if (articleModel.activeIndex === null) {
                this.props.dispatch({type: 'article/add', article});
            }
            return article;
        }
        fetchArticleService(id).then(article => {
            this.props.dispatch({type: 'article/add', article});
        });
        return null;
    }

    static renderComments(comments) {
        if (comments && comments.length > 0) {
            comments.map((comment, index) => (
                <Comment comment={comment} key={index}/>
            ))
        } else {
            return <div className={styles.notComments}>暂无评论</div>;
        }
    }

    render() {
        const article = this.getArticle(),
            loading = this.props.article.loading;

        if (!loading && article) {
            return (
                <article className={classNames(styles.articleBox, "animated", "fadeInDown")}>
                    <header>
                        <h3>{article.title}</h3>
                        <p className={styles.time}>{article.updatedAt}</p>
                    </header>
                    <section className={styles.articleContentBox}>
                        <div className={classNames(styles.content, "markdown-body")}>
                            <ReactMarkdown source={article.content}/>
                        </div>
                    </section>
                    <footer className={styles.footerBox}>
                        <div className={styles.actions}>
                            <a href="javascript:;" className={styles.share}><Icon type="share-alt"/></a>
                        </div>
                        <div className={styles.comments}>
                            {Article.renderComments(article.comments)}
                        </div>
                        <BackTop/>
                    </footer>
                </article>
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
