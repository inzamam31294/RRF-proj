export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call
        const firestore = getFirestore()
        dispatch({type: 'CREATE_PROJECT', project})
    }
}
