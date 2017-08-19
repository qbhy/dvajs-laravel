import React, {Component} from 'react';
import styles from './comment.scss';

export default class Comment extends Component {
    render() {
        const {comment} = this.props;
        return (
            <div className={styles.commentBox}>
                <div className={styles.comment}>
                    <div className={styles.avatar}>
                        <img src={comment.avatar}/>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.header}>
                            {comment.user}
                            <span className={styles.time}>{comment.time}</span>
                        </h4>
                        <p className={styles.content}>{comment.content}</p>
                    </div>
                </div>
                <p className={styles.footer}/>
            </div>
        );
    }
}