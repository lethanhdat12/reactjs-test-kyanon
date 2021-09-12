const initState = {
    listEmployees : [],
    isDelete : false,
}

const EmployeeReducer = (state = initState, action) => {
    let newState = {...state};
    switch (action.type) {
        case "SELECT_EMPLOYEES":
            return {
                ...newState,
                listEmployees : action.payload
            };
        case "DELETE":
            return {
                ...newState,
                isDelete : !newState.isDelete
            };
        default:
            return state;
    }
}

export default EmployeeReducer;