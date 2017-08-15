import React, {Component, PropTypes} from 'react';
import styles from './profile.scss';
import {Icon} from 'antd';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className={styles.profileBox}>
                <div className={styles.head}>
                    <a href="#" className={styles.avatar}>
                        <img src={require('../assets/qbhy.png')}/>
                    </a>
                    <h3 className={styles.name}>{user.name}</h3>
                </div>
                <div className={styles.actions}>
                    <a href="javascript:;" className={styles.subscribe}><Icon type="tag-o"/> 订阅</a>
                </div>
            </div>
        );
    }
}