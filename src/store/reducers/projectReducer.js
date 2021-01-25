const initState = {
    projects: [
        {id: '1', title: 'title 1', content: 'content 1'},
        {id: '2', title: 'title 2', content: 'content 2'},
        {id: '3', title: 'title 3', content: 'content 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("created project error", action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log("delete project", action.id);
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log("delete project error", action.err);
            return state;
        case 'EDIT_PROJECT':
            console.log("edit project", action.project);
            return state;
        case 'EDIT_PROJECT_ERROR':
            console.log("edit project error", action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer