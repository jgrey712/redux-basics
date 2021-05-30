const logger = store => next => action => {
    //next is next fn || reducer
    console.log('store: ', store); //not same as store (just looks like it)
    console.log('next: ', next);
    console.log('action: ', action);
    next(action);
}

export default logger;