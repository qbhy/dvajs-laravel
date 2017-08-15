import React, {Component, PropTypes} from 'react';
import {Link} from 'dva/router';

class SimpleArticle extends Component {

    render() {
        const {article} = this.state;
        return (
            <article>
                <header>
                    <h2>{article.title}</h2>
                    <span>{article.updatedAt}</span>
                </header>
                <section>{article.abstract}</section>
                <footer>
                    <button>发表评论</button>
                    <button>阅读全文</button>
                </footer>
            </article>
        );
    }
}

SimpleArticle.PropTypes = {
    article: PropTypes.object.required
};

export default SimpleArticle;