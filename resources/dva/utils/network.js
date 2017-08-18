import request from 'axios';
import {notification} from 'antd';

function parseJSON(response) {
    return response.data;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    }
    const error = new Error(response.statusText);
    notification.error({
        message: '网络出现以下错误。',
        description: response.statusText,
    });
    error.response = response;
    throw error;
}

export default function (url, options = {}) {
    return request.post(url, options)
        .then(checkStatus);
}
