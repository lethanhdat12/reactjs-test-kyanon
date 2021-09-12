import './Sidebar.scss'
import { Layout } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from 'react';
import { departmentSelect } from '../../redux/Action/AppAction';
import { useDispatch } from 'react-redux';
import { getAllDepartment } from '../Sevicers/EmployeeSevicers';
const { Option } = Select;
const { Sider } = Layout;
const Sidebar = () => {
  const [department, setDepartment] = useState([]);
  const departmentDispatch = useDispatch();
  useEffect(()=>{
    async function featchAllDepartment(){
      try{
        let data = await getAllDepartment();
        setDepartment(data)
      }catch(e){
        console.log(e);
      }
    }
    featchAllDepartment();

  },[])

  const handleOnselect = (id)=>{
    let action = departmentSelect(id);
    departmentDispatch(action);
  }


  return (
    <Sider width={300} className="site-layout-background">
      <div className="siderBar__content">
        <h1>Filter</h1>
        <div className="filter__item">
          <p>Name</p>
          <Input
            placeholder="Employee Name"
          />
        </div>
        <div className="filter__item">
          <p>Employee ID</p>
          <Select defaultValue="ID" className="filter__select" bordered={false} suffixIcon={<CaretDownOutlined />}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="filter__item">
          <p>Department</p>
          <Select defaultValue="Choice" className="filter__select" bordered={false} suffixIcon={<CaretDownOutlined />} onSelect={handleOnselect}>
            {
              department.map( (item,index)=>{
                return <Option key={index} value={item.id}>{item.department}</Option>
              } )
            }
            
          </Select>
        </div>
        <div className="filter__item">
          <p>More</p>
          <Select defaultValue="Choice" className="filter__select" bordered={false} suffixIcon={<CaretDownOutlined />}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
      </div>
    </Sider>
  )
}

export default Sidebar;