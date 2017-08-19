import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './article.scss';
import fetchArticle from '../../services/fetchArticle';
import {Link} from 'dva/router';
import {route, copyText} from '../../utils';
import classNames from 'classnames';
import {Icon, Popover} from 'antd';
import Comment from '../../components/comment';

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
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );

        if (!loading && article) {
            return (
                <article className={classNames(styles.articleBox, "animated", "fadeInDown")}>
                    <header>
                        <h3>{article.title}</h3>
                        <p className={styles.time}>{article.updatedAt}</p>
                    </header>
                    <section className={styles.articleContentBox}>
                        <div className={classNames(styles.content, "markdown-body")}
                             dangerouslySetInnerHTML={{__html: article.content}}/>
                    </section>
                    <footer className={styles.footerBox}>
                        <div className={styles.actions}>
                            <a href="javascript:;" className={styles.share}><Icon type="share-alt"/></a>
                        </div>
                        <div className={styles.comments}>
                            {Article.renderComments(article.comments)}
                        </div>
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
