import './App.css';
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'antd';
import HeaderComponent from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Main from './component/Main/Main';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeDetail from './component/Employees/EmployeeDetail';
function App() {
  const [isShow, setIsShow] = useState(false);
  const select = useSelector(state => state.AppReducer.showSelect);
  const showSidebar = () => {
    setIsShow(!isShow)
  }

  return (
    <Layout>

      <Switch>
        <Route path="/employees/:id">
          <HeaderComponent showSideBar={showSidebar}  filter={false}/>
          <EmployeeDetail />
        </Route>
        <Route path="/">
          <HeaderComponent showSideBar={showSidebar}  filter={true}/>
          <Layout>
            {
              isShow ? <Sidebar /> : null
            }
            <Main isShowSelect={select} />
          </Layout>
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
