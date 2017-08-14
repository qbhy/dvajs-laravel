import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './indexPage.scss';
import {Link} from 'dva/router';
import {
    Button,
    Icon,
    message,
    Modal
} from 'antd';


class Articles extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            message.success('出现错误啦?');
        }, 1000);
    }


    render() {
        const {user} = this.props;
        return (
            <div>
                <Button>按钮</Button>
                {/*<Modal visible={true} title="文章列表">*/}
                    <div className={styles.container}>
                        <Icon type="step-backward"/>
                        <span>文章列表页面</span>
                        <Link to="/">去首页</Link>
                        <Button>button</Button>
                    </div>
                {/*</Modal>*/}
            </div>
        );
    }
}


export default connect(state => state)(Articles);
