import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './indexPage.scss';
import {Link} from 'dva/router';


class IndexPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 2000);
    }

    render() {
        const {user} = this.props;
        return (
            <div className={styles.container}>
                <img src={require('../assets/qbhy.png')}/>
                <h2>404</h2>
            </div>
        );
    }
}


export default connect(state => state)(IndexPage);
