import axios from "axios";

export const getEmployerByIdDepartment = async (id)=>{
    let res = await axios.get(`${process.env.REACT_APP_URL_API}/${id}/employees`);
    let data = await res.data;
    return data;
}

export const getAllDepartment = async ()=>{
    let res = await axios.get(`${process.env.REACT_APP_URL_API}`);
    let data = await res.data;
    return data;
}

export const deleteEmployer = async (idDepartment , idEmployees)=>{
    let res = await axios.delete(`${process.env.REACT_APP_URL_API}/${idDepartment}/employees/${idEmployees}`);
    let data = await res.data;
    return data;
}

export const getEmployerByID = async (idDepartment , idEmployees)=>{
    let res = await axios.get(`${process.env.REACT_APP_URL_API}/${idDepartment}/employees/${idEmployees}`);
    let data = await res.data;
    return data;
}