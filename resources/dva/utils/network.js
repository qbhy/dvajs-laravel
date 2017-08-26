import request from 'axios';
import {notification} from 'antd';


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

export default function (url, data = {}, options = {withCredentials: true}) {
    return request.post(url, data, options).then(checkStatus);
}
