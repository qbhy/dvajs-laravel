export default {
    delay(timeout){
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    },
    copyText: require('./copyText'),
    route: require('./route'),
}