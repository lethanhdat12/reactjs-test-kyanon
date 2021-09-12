import React from 'react';
import { Modal } from 'antd';
import { useSelector , useDispatch } from 'react-redux';
import { deleteEmployer } from '../Sevicers/EmployeeSevicers';
import { deleteAction } from '../../redux/Action/EmployeeAction';
const ModalConfirm = (props) => {
    const { isopenModal, openModal } = props;
    const dataEmployees = useSelector(state => state.EmployeeReducer.listEmployees);
    const deleteDispatch = useDispatch();
    const handleOk = async () => {
        if (dataEmployees && dataEmployees.length > 0) {
            for (let i = 0; i < dataEmployees.length; i++) {
                const { departmentId, id } = dataEmployees[i]
                await deleteEmployer(departmentId, id);
            }
            isopenModal();
            let action = deleteAction();
            deleteDispatch(action);
        } else {
            alert("chon nguoi dung")
        }
    };
    const handleCancel = () => {
        isopenModal();
    };

    return (
        <>
            <Modal title="Comfirm Delete" visible={openModal} onOk={handleOk} onCancel={handleCancel}>
                Delete {dataEmployees.length} Employees
            </Modal>
        </>
    );
};

export default ModalConfirm;