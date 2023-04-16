const logger = (message) => {
    if (typeof(message) !== 'string') {
        console.error('ERROR : Message is not equal to type String...');
    } else {
        console.log(message);
    }
}

module.exports = logger;
