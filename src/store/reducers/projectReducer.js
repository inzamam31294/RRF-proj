const initState = {
    projects: [
        {id: '1', title: 'hello', content: 'hello world'},
        {id: '2', title: 'hello', content: 'hello world'},
        {id: '3', title: 'hello', content: 'hello world'}
    ]
}


const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
    }
    return state
}


export default projectReducer