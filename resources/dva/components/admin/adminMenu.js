import React, {Component} from 'react';
import styles from './adminMenu.scss';
import classNames from 'classnames';
import {Link} from 'dva/router';
import route from '../../utils/route';
import {
    Menu, Icon
} from 'antd';
const SubMenu = Menu.SubMenu;

export default class AdminMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {collapsed} = this.props;
        return (
            <div className={classNames(styles.menuBox, {[styles.min]: collapsed})}>
                <div className={styles.headerBox}>
                    dva
                </div>
                <Menu
                    defaultSelectedKeys={['chart']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}>
                    <Menu.Item key="chart">
                        <Link to={route('adminHome')}>
                            <Icon type="pie-chart"/>
                            <span>概览</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="publishArticle">
                        <Link to={route('publishArticle')}>
                            <Icon type="file-add"/>
                            <span>新建文章</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="manageArticle">
                        <Icon type="folder"/>
                        <span>管理文章</span>
                    </Menu.Item>
                    <SubMenu key="adminActions" title={<span><Icon type="user"/><span>管理员操作</span></span>}>
                        <Menu.Item key="alterPassword">
                            <Icon type="lock"/>
                            <span>更改密码</span>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <Icon type="logout"/>
                            <span>注销登录</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

