import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './publishArticle.scss';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import store from 'store';
import delay from '../../utils/delay';
import {
    Col,
    Card,
    Input,
    Button,
    DatePicker,
    TimePicker,
} from 'antd';

const {TextArea} = Input;

class PublishArticle extends Component {
    constructor(props) {
        super(props);
        store.clearAll();
        const editor = store.get('editor') || props.editor;
        this.state = {
            ...editor
        };
    }

    onChange(name, e) {
        this.state[name] = e.target.value;
        this.setState({});
    }

    bindDatetime(name, time, timeString) {
        console.log(time);
        this.state[name] = time;
        this.setState({});
    }

    componentDidMount() {
        delay(500).then(() => {
            store.clearAll();
        });
    }

    componentWillUnmount() {
        store.set('editor', {...this.state});
        this.props.dispatch({type: 'editor/save', editor: {...this.state}});
    }

    render() {
        const {content, title, date, time} = this.state;
        return (
            <div>

                <Card style={{marginBottom: 10}} title="文章标题">
                    <Input value={title} onChange={this.onChange.bind(this, 'title')}/>
                </Card>

                <Card style={{marginBottom: 10}} title="发布时间">
                    <DatePicker value={date} onChange={this.bindDatetime.bind(this, 'date')}/>
                    <TimePicker value={time} onChange={this.bindDatetime.bind(this, 'time')}/>
                </Card>

                <Card title="文章内容">
                    <Col span={12}>
                        <TextArea autosize={true} onChange={this.onChange.bind(this, 'content')} defaultValue={content}
                                  className={styles.editor}/>
                    </Col>
                    <Col span={12} className={classNames('markdown-body', styles.preview)}>
                        <ReactMarkdown source={content}/>
                    </Col>
                </Card>

                <div className={styles.actions}>
                    <Button>发布文章</Button>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(PublishArticle);