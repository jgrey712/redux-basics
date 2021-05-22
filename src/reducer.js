let lastId = 0;

function reducer(state = [], action) {
    switch(action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    removed: false
                }
            ];
        case  "bugRemoved":
            return state.filter(bug => bug !== action.payload.id);
        default:
            return state;
    }    
}