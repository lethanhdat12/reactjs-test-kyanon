
import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { showSelect } from '../redux/Action/AppAction';
import { useDispatch, useSelector } from 'react-redux';
import { CSVLink } from "react-csv";
import { toast } from 'react-toastify';
import ToastComponent from './Toast/ToastComponent';
import ModalConfirm from './Toast/ModalConfirm';
const MenuDropDown = (props) => {
    const dispatch = useDispatch();
    const dataEmployees = useSelector(state => state.EmployeeReducer.listEmployees);
    const [checkData, setCheckData] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleShowSelect = () => {
        const action = showSelect();
        dispatch(action)
    }

    const showModal = () => {
        console.log(openModal);
       setOpenModal(!openModal);
    }

    const handleDownload = () => {
        if (dataEmployees && dataEmployees.length > 0) {
            setCheckData(true);
        } else {
            setCheckData(false);
            toast.error("Please choice Employees")
        }
    }

    const headers = [
        { label: "Name", key: "name" },
        { label: "Image", key: "image" },
        { label: "Employee ID", key: "id" },
        { label: "Position", key: "position" },
        { label: "Department", key: "department.department" },
        { label: "Email", key: "email" }
    ];

    const csvReport = {
        data: dataEmployees,
        headers: headers,
        filename: 'Employees.csv'
    };


    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={handleShowSelect}>
                Select Columns
            </Menu.Item>
            <Menu.Item key="2" onClick={handleDownload}>
                {
                    checkData ? <CSVLink {...csvReport}> Download Employees</CSVLink> : " Download Employees"
                }
            </Menu.Item>
            <Menu.Item key="3">
                Import Employees
            </Menu.Item>
            <Menu.Item key="4" onClick={showModal}>
                Delete Employees
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <Dropdown overlay={menu}>
                {
                    props.children
                }
            </Dropdown>
            <ToastComponent/>
            <ModalConfirm isopenModal={showModal} openModal ={openModal} />
        </>
    )
}

export default MenuDropDown;