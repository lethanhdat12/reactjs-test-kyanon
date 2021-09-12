export const showSelect = ()=>{
    return {
        type : "SHOW_SELECT"
    }
}


export const departmentSelect = (payload)=>{
    return {
        type : "DEPARTMENT_SELECT",
        payload : payload
    }
}