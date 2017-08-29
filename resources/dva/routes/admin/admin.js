import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './admin.scss';
import delay from '../../utils/delay';
import AdminMenu from '../../components/admin/adminMenu';
import {
    message,
    Icon,
    Avatar,
    Dropdown,
    Menu,
} from 'antd';

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
    }

    componentWillMount() {
        const {user} = this.props;

        delay(500).then(() => {
            if (!user) {
                message.warning('你还没有登录~');
            }
            if (!user.isAdmin) {
                message.info('您不是管理员!');
            }
            message.info('欢迎管理员登录');
        });

    }

    switchMenu() {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        const {owner, children} = this.props,
            {collapsed} = this.state;
        const menu = (
            <Menu>
                <Menu.Item key="3">
                    <a href="javascript:;">
                        <Icon type="logout"/>
                        <span> 注销登录</span>
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.adminBox}>
                <AdminMenu collapsed={collapsed} admin={owner}/>
                <div className={styles.mainBox}>
                    <div className={styles.headerBox}>
                        <a className={styles.switchMenu} onClick={() => this.switchMenu()} href="javascript:;">
                            {collapsed ? <Icon type="menu-unfold"/> : <Icon type="menu-fold"/>}
                        </a>
                        <div className={styles.actionsBox}>
                            <Dropdown placement="bottomCenter" overlay={menu}>
                                <Avatar src={owner.avatar}/>
                            </Dropdown>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Admin);