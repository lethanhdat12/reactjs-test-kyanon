import { Link } from "react-router-dom";
export const DefindColumn = [
    {
        title: 'Image',
        dataIndex: 'image',
        render: (text) => {
            return <p className="avatar" style={{ backgroundImage: "url('" + text + "')" }}></p>
        },
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => {
            return  <p>{text}</p>
        },
    },
    {
        title: 'Employee ID',
        dataIndex: 'id',
        render: (text) => {
            return  <Link to={"/employees/" + text}>{text}</Link>
        },
    },
    {
        title: 'Position',
        dataIndex: 'position',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        render: (data) => {
            return  <p className="department"> {data.department}</p>
        },
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
]