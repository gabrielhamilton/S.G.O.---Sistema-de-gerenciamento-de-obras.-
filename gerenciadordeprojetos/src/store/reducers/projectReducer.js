const initState = {
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CRETE_PROJECT_ERROR':
            console.log('crete project error', action.err);
            return state;
        case 'CREATE_MATERIAL':
                console.log('created material', action.material);
                return state;
        case 'CRETE_MATERIAL_ERROR':
                console.log('crete material error', action.err);
                return state;
        default:
            return state;
    }
}

export default projectReducer