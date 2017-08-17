import React, {Component, PropTypes} from 'react';
import styles from './search.scss';
import classNames from 'classnames';
import {Icon, message} from 'antd';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: ''
        };

    }

    toggleSwitch(open) {
        this.setState({open: open});
    }

    handleSearch() {
        const {text} = this.state;
        if (text === '') {
            return message.warning('请输入关键词进行搜索！');
        }
        this.props.onSearch(text);
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        const {open, text} = this.state,
            {placeholder} = this.props,
            searchClass = classNames(styles.searchable, {
                [styles.hide]: !open
            });
        return (
            <div className={styles.searchBox}>
                <form onSubmit={(e) => e.preventDefault() || this.handleSearch()}
                      className={searchClass}>
                    <button type="button" onClick={() => this.toggleSwitch(!open)} className={styles.icon}>
                        <Icon type="search"/>
                    </button>

                    <input value={text} type="search"
                           onChange={this.onChange.bind(this)}
                           placeholder={placeholder}/>

                    <button disabled={text === ''} type="submit">搜索</button>
                </form>
            </div>
        );
    }
}

Search.PropTypes = {
    onSearch: PropTypes.func.required,
    placeholder: PropTypes.string.required
};

export default Search;