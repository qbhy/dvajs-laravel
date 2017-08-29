import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './adminHome.scss';

class PublishArticle extends Component {
    render() {

        return (
            <div>
                发布文章页面
            </div>
        );
    }
}

export default connect(state => state)(PublishArticle);