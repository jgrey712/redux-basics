const func = ({dispatch, getstate}) =>  next => action => {
    if (typeof action === 'function') {
        action(dispatch, getstate);  //call
    } else {
        next(action); //pass as arg
    }
}

export default func;