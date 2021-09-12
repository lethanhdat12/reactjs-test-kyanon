import React, { useState, useEffect } from 'react';
import { Table, Divider } from 'antd';
import { Layout } from 'antd';
import { DefindColumn } from './DefineColum';
import './Main.scss'
import { getEmployerByIdDepartment } from '../Sevicers/EmployeeSevicers';
import { useSelector, useDispatch } from 'react-redux';
import { selectAction } from '../../redux/Action/EmployeeAction';
import {PlusOutlined} from '@ant-design/icons'
const { Content } = Layout;
const Main = (props) => {
    const idDepartment = useSelector(state => state.AppReducer.departmentSelect);
    const idDelete = useSelector(state => state.EmployeeReducer.isDelete);
    const selectDispatch = useDispatch();
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            let action = selectAction(selectedRows);
            selectDispatch(action);
        }
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await getEmployerByIdDepartment(idDepartment);
                setData(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [idDepartment, idDelete])

    const { isShowSelect } = props;
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 380,
                }}
            >
                <div>
                    <Divider />
                    <Table
                        rowSelection={isShowSelect ? { ...rowSelection } : null}
                        columns={DefindColumn}
                        dataSource={data}
                        pagination={false}
                        className="table__main"
                    />
                </div>
            </Content>
            <div className="addEmployees">
                <PlusOutlined />
            </div>
        </Layout>
    )
}

export default Main;