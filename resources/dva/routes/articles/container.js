import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './container.scss';
import Profile from '../../components/profile';
import Search from '../../components/search';


class Articles extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {owner, children} = this.props;
        return (
            <div>
                <Profile user={owner}/>
                <div className={styles.contentBox}>

                    <div className={styles.header}>
                        <div className={styles.actions}>
                            <Search placeholder="请输入关键词进行搜索" onSearch={(text) => {
                                console.log(text);
                            }}/>
                        </div>
                        <h2>{owner.name}的博客</h2>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}


export default connect(state => state)(Articles);
