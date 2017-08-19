import is from 'is_js';
import routes from '../routes/index';

export function getValue(json, key) {
    for (let attr in json) {
        if (key === attr) {
            if (is.string(json[attr])) {
                return json[attr];
            } else {
                return 1;           //错误1：key对应的value非字符串
            }
        } else {
            if (is.json(json[attr])) {
                let r = getValue(json[attr], key);
                if (is.string(r)) {
                    return r;
                }
            }
        }
    }
    return 2;                       //错误2： 没有找到相应的value哦~
}

export default function route(name, params) {
    let url = getValue(routes, name);
    if (is.not.string(url)) {
        console.warn('没有找到指定路由，错误代码是：' + url, name);
        return '/404';
    }
    if (params) {
        for (let item in params) {
            url = url.indexOf('(/:' + item + ')') === -1 ?
                url.replace('/:' + item, '/' + params[item])
                :
                url.replace('(/:' + item + ')', '/' + params[item]);
        }
        url = url.replace(/\(\/:.*\)/g, '');
    }
    return url;
};
