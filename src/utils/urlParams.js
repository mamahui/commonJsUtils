/**
 * @Description: 获取url参数
 * @Author: mahui
 * @Date: 2019/4/26 2:24 PM
 */
const urlHref = window.location.href;
const urlSearch = window.location.search;
const urlHash = window.location.hash;

// 获取url参数
const getUrlParams = (url = urlSearch) => {
    let temArr = [];
    const  params = {};
    const urlArr = url.split('?');
    if (urlArr.length > 1) {
        temArr = urlArr[1].split('#')[0].split('&');
    }
    if (temArr.length > 0 && temArr[0] !== '') {
        temArr.forEach((item) => {
            const tmp = item.split('=');
            params[tmp[0]] = tmp[1];
        })
    }
    return params;
};
// 获取hash参数
const getHashParams = (url = urlHash) => {
    let tmp = '';
    const urlArr = url.split('#');
    if (urlArr.length > 1) {
        tmp = urlArr[1];
    }
    return tmp;
};
// 对传入的URL设置参数
const setUrlParams =({_url = urlHref, _params = {}, _hashParams = ''}) => {
    let url = _url;
    const paramsArr = [];
    const currentUrlParams = getUrlParams(url);
    const currentHashParams = getHashParams(url);
    const params = {
        ...currentUrlParams,
        ..._params
    };
    const hashParams = _hashParams || currentHashParams;
    Object.keys(params).forEach((key) => {
        let str = key;
        if (params[key] != null) {
            str = `${key}=${params[key]}`;
        }
        paramsArr.push(str);
    });
    url = `${url.split('#')[0].split('?')[0]}`;
    if (paramsArr.length > 0) {
        url += `?${paramsArr.join('&')}`;
    }
    if (hashParams) {
        url += `#${hashParams}`;
    }
    return url;
};

export default {
    getUrlParams,
    getHashParams,
    setUrlParams,
}