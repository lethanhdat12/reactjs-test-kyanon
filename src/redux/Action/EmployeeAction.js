export const selectAction = (payload)=>{
    return {
        type : "SELECT_EMPLOYEES",
        payload : payload
    }
}

export const deleteAction = ()=>{
    return {
        type : "DELETE",
    }
}