import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './articles.scss';
import {Link} from 'dva/router';
import Profile from '../components/profile';
import Search from '../components/search';
import SimpleArticle from '../components/simpleArticle';
import {
    Button,
    Icon,
    message,
} from 'antd';


class Articles extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            message.success('消息消息?');
        }, 1000);
    }


    render() {
        const {user} = this.props;
        return (
            <div>
                <Profile user={user}/>
                <div className={styles.contentBox}>

                    <div className={styles.header}>
                        <div className={styles.actions}>
                            <Search placeholder="请输入关键词进行搜索" onSearch={(text) => {
                                console.log(text);
                            }}/>
                        </div>
                        <h2>{user.name}的博客</h2>
                    </div>

                    <div className={styles.articlesBox}>
                        {user.articles.map((article, index) => (
                            <SimpleArticle article={article} key={index}/>
                        ))}
                    </div>


                </div>
            </div>
        );
    }
}


export default connect(state => state)(Articles);
