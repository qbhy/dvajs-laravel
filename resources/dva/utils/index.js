export default {
    delay: (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
}