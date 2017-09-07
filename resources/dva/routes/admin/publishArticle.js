import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './publishArticle.scss';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import store from 'store';
import delay from '../../utils/delay';
import publishArticleService from '../../services/publishArticle';
import {
    Col,
    Card,
    Input,
    Button,
    DatePicker,
    TimePicker,
    message,
} from 'antd';

const {TextArea} = Input;

class PublishArticle extends Component {
    constructor(props) {
        super(props);
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
        this.state[name] = timeString;
        this.setState({});
    }

    componentWillUnmount() {
        store.set('editor', {...this.state});
        this.props.dispatch({type: 'editor/save', editor: {...this.state}});
    }

    onPublish() {
        const {title, content, time, date} = this.state;
        if (title === "") {
            return message.warning('请填写标题!');
        }
        if (content === "") {
            return message.warning('请输入文章内容!');
        }
        if (date === "" || time === "") {
            return message.warning('请填写发布时间!');
        }
        const data = {
            title,
            content,
            publishedAt: `${date} ${time}`
        };
        publishArticleService(data).then(() => {
            message.success('文章发布成功!');
            this.setState({
                title: '',
                content: '',
                date: '',
                time: '',
            });
        }).catch((err) => {
            console.log(err);
            message.warning('发布失败');
        });
    }

    render() {
        const {content, title, date, time} = this.state;
        return (
            <div>
                <Card style={{marginBottom: 10}} title="文章标题">
                    <Input value={title} onChange={this.onChange.bind(this, 'title')}/>
                </Card>

                <Card style={{marginBottom: 10}} title="发布时间">
                    <DatePicker onChange={this.bindDatetime.bind(this, 'date')}/> <TimePicker
                    onChange={this.bindDatetime.bind(this, 'time')}/>
                </Card>

                <Card title="文章内容">
                    <Col span={12}>
                        <TextArea autosize={true} onChange={this.onChange.bind(this, 'content')} value={content}
                                  className={styles.editor}/>
                    </Col>
                    <Col span={12} className={classNames('markdown-body', styles.preview)}>
                        <ReactMarkdown source={content}/>
                    </Col>
                </Card>

                <div className={styles.actions}>
                    <Button onClick={() => this.onPublish()}>发布文章</Button>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(PublishArticle);