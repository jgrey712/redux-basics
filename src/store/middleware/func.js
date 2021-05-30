const func = store =>  next => action => {
    if (typeof action === 'function') {
        action();  //call
    } else {
        next(action); //pass as arg
    }
}

export default func;