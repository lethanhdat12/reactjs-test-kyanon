
const initState = {
    showSelect: false,
    departmentSelect: 1,
}

const AppReducer = (state = initState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "SHOW_SELECT":
            return {
                ...newState,
                showSelect: !newState.showSelect
            };
        case "DEPARTMENT_SELECT":
            return {
                ...newState,
                departmentSelect: action.payload
            };
        default:
            return state;
    }
}

export default AppReducer;
