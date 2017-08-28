import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './admin.scss';

class AdminHome extends Component {
    render() {
        const {owner, user} = this.props;
        return (
            <div>
                管理员主页
            </div>
        );
    }
}

export default connect(state => state)(AdminHome);