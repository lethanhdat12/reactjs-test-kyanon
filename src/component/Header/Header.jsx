

import { Layout} from 'antd';
import { MenuOutlined, CaretDownOutlined, DownOutlined, FilterOutlined,MoreOutlined } from '@ant-design/icons';
import logo from '../../access/image/logo.png';
import './Header.scss'
import MenuDropDown from '../MenuDropdown';
const { Header } = Layout;

const HeaderComponent = (props) => {
    const {showSideBar , filter} = props;
    return (
        <>
            <Header className="header">
                <div className="header__top">
                    <div className="header__menu">
                        <MenuOutlined className="header__menu--icon" />
                        <span>PENSKE</span>
                    </div>
                    <div className="header__mid">
                        <span>NORTH START MOTORS</span>
                        <CaretDownOutlined />
                    </div>
                    <div className="header__infor h-cus">
                        <img src={logo} alt="avarta" className="header__logo" />
                        <span className="header__name"> Jean Valjean </span>
                        <DownOutlined />
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom--left">
                        <span>Employees</span>
                        <span className="header__bottom--total"> 142 Employees</span>
                    </div>
                    <div className="header__bottom--right">
                       {
                           filter &&  <FilterOutlined className="filter" onClick={showSideBar} />
                       } 
                        <MenuDropDown>
                             <MoreOutlined />
                        </MenuDropDown>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default HeaderComponent;