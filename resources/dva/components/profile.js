import React, {Component, PropTypes} from 'react';
import styles from './profile.scss';
import {Icon} from 'antd';
import {Link} from 'dva/router';
import route from '../utils/route';

export default class Profile extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className={styles.profileBox}>
                <div className={styles.head}>
                    <Link to="/" className={styles.avatar}>
                        <img src={require('../assets/qbhy.png')}/>
                    </Link>
                    <h3 className={styles.name}>{user.name}</h3>
                </div>
                <div className={styles.actionsBox}>
                    <div className={styles.top}>
                        <a href="javascript:;" className={styles.subscribe}><Icon type="tag-o"/> 订阅</a>
                    </div>
                    <div className={styles.footer}>
                        <Link to={route('adminHome')}>管理员登录</Link>
                    </div>
                </div>

            </div>
        );
    }
}