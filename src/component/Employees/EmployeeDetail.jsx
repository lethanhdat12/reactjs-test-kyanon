
import React , { useEffect , useState } from 'react'
import { Col, Layout, Row } from 'antd';
import './EmployeeDetail.scss'
import { PlusOutlined } from '@ant-design/icons'
import VerticalBar from './ChartEmployee';
import { Input } from 'antd';
import { Menu, Dropdown , Button} from 'antd';
import { CaretDownOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
import TableDetail from './TableDetail';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getEmployerByID } from '../Sevicers/EmployeeSevicers';
const { Content } = Layout;
export default function EmployeeDetail() {
    let { id } = useParams();
    const idDepartMent = useSelector(state=>state.AppReducer.departmentSelect);
    const [data,setData] = useState({});

    useEffect( ()=>{
        async function getEmployee(){
           let res = await getEmployerByID(idDepartMent, id);
          setData(res);
        }

        getEmployee();

    },[] )

    const style = { padding: '8px' };
    const menu = (
        <Menu>
            <Menu.Item key="0">
                1st menu item
            </Menu.Item>
            <Menu.Item key="1">
                2nd menu item
            </Menu.Item>
        </Menu>
    );
    return (
        <Content style={{ padding: '20px 50px' }} className="content">
            <Layout>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>

                        <div className="content__left pd10">
                            <div className="content__title">{data.name}</div>
                            <Row>
                                <Col span={8}>
                                    <div className="content__avt">
                                        <p className="content__avt--name"> Employee Image </p>
                                        <div className="content__avt--box">
                                            <div className="content__avt--img" style={{ backgroundImage: `url("`+ data.image +`")` }}></div>
                                            <div className="content__avt--plus">
                                                <PlusOutlined />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div className="content__chart">
                                        <p className="content__avt--name"> Inpections Completed </p>
                                        <VerticalBar />
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={6}>
                                    <div className="content__leftfooter">
                                        <p className="content__leftfooter--title">
                                            Total inspections
                                        </p>
                                        <p className="content__leftfooter--num">203</p>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="content__leftfooter">
                                        <p className="content__leftfooter--title">
                                            Open Isues
                                        </p>
                                        <p className="content__leftfooter--num">4</p>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="content__leftfooter">
                                        <p className="content__leftfooter--title">
                                            Last Login
                                        </p>
                                        <p className="content__leftfooter--num">24/12/2017</p>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="content__leftfooter">
                                        <p className="content__leftfooter--title">
                                            Sites
                                        </p>
                                        <p className="content__leftfooter--num">4</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="content__right ">
                            <div className="top mb-3 pd10">
                                <div className="content__title">Details</div>
                                <Row gutter={16} className="mb-1">
                                    <Col span={8}>
                                        <Input className="none-boder" placeholder="First Name" value={data.name} />
                                    </Col>
                                    <Col span={8}>
                                        <Input className="none-boder" placeholder="Email" value={data.email} />
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Department</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Dropdown className="none-boder drop--height" overlay={menu}>
                                                <p className="select_flex"> Hover me <CaretDownOutlined /></p>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Input className="none-boder" placeholder="Last Name" value="Smith" />
                                    </Col>
                                    <Col span={8}>
                                        <Input className="none-boder" placeholder="Phone Number" value="04792268038" />
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Position</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Dropdown className="none-boder drop--height" overlay={menu}>
                                                <p className="select_flex"> Hover me <CaretDownOutlined /></p>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="bottom mb-3 pd10">
                                <div className="content__title">Credentials</div>
                                <Row gutter={16} className="mb-1">
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Username</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Input className="none-boder pd0" placeholder="Phone Number" value={data.email} />
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Role</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Dropdown className="none-boder drop--height" overlay={menu}>
                                                <p className="select_flex"> Hover me <CaretDownOutlined /></p>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Employee ID</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Input className="none-boder pd0" placeholder="Phone Number" value={data.id} />
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Password</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Input className="none-boder pd0" type="password" placeholder="Phone Number" value={data.key} />
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Site Access</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Dropdown className="none-boder drop--height" overlay={menu}>
                                                <p className="select_flex"> Hover me <CaretDownOutlined /></p>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="content__drop">
                                            <p className="content__drop--title">
                                                <span className="t-main">Pin</span>
                                                <QuestionCircleOutlined />
                                            </p>
                                            <Input className="none-boder pd0" type="password" placeholder="Phone Number" value={data.key} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
            <Layout className="content__table">
                <div style={style} className="pd10">
                    <div className="content__title">
                        Employee Inspections
                    </div>
                    <div className="content__table--btngroup">
                        <Button type="primary" className="btn-main">
                            Inspections 
                        </Button>

                        <Button type="primary"  disabled>
                            Issues
                        </Button>
                    </div>
                    <TableDetail/>
                </div>
            </Layout>
        </Content>
    )
}
