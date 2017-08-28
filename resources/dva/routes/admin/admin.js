import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './admin.scss';

class Admin extends Component {
    render() {
        const {owner, user, children} = this.props;
        return (
            <div>
                管理员页面
                {children}
            </div>
        );
    }
}

export default connect(state => state)(Admin);