import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
const { Header } = Layout;
const { SubMenu } = Menu;
const Navigation = (props) => {
  //   const menuJob = (
  //     <Menu style={{ width: "200px", marginTop: "20px", marginLeft: "-20px" }}>
  //       <SubMenu title="sub menu">
  //         <div style={{ width: "400px", height: "auto" }}>
  //           <Row>
  //             <Col span={12} style={{ textAlign: "center" }}>
  //               Java
  //             </Col>
  //             <Col span={12} style={{ textAlign: "center" }}>
  //               Ruby
  //             </Col>
  //           </Row>
  //         </div>
  //       </SubMenu>
  //       <SubMenu title="sub menu">
  //         <div style={{ width: "400px", height: "auto" }}>
  //           <Row>
  //             <Col span={12} style={{ textAlign: "center" }}>
  //               Java
  //             </Col>
  //             <Col span={12} style={{ textAlign: "center" }}>
  //               Ruby
  //             </Col>
  //           </Row>
  //         </div>
  //       </SubMenu>
  //     </Menu>
  //   );
  //   const logoutHandle = () => {
  //     localStorage.removeItem("Authorization");
  //     localStorage.removeItem("userName");
  //     window.location.reload();
  //   };
  //   const menuCompany = (
  //     <Menu style={{ width: "200px", marginTop: "20px", marginLeft: "-20px" }}>
  //       <SubMenu title="sub menu">
  //         <Menu.Item>Công ty tốt nhất 2021</Menu.Item>
  //         <Menu.Item>Công ty tốt nhất 2020</Menu.Item>
  //         <Menu.Item>Công ty tốt nhất 2019</Menu.Item>
  //         <Menu.Item>Công ty tốt nhất 2018</Menu.Item>
  //       </SubMenu>
  //       <Menu.Item>Review Công ty</Menu.Item>
  //     </Menu>
  //   );
  //   return (
  //     <Header className="header-fix" style={{ zIndex: 2 }}>
  //       <Link to="/">
  //         <div className="logo" id="components-layout-demo-top-side-2">
  //           <img
  //             src={Logo}
  //             id="components-layout-demo-top-side-2"
  //             className="logo"
  //           ></img>
  //         </div>
  //       </Link>
  //       <Menu theme="dark" mode="horizontal" className="header-menu">
  //         <Menu.Item>
  //           <Dropdown overlay={menuJob}>
  //             <Link
  //               to="/jobs"
  //               className="ant-dropdown-link"
  //               id="dropdown-link-navi"
  //             >
  //               Việc Làm IT
  //             </Link>
  //           </Dropdown>
  //         </Menu.Item>
  //         <Menu.Item>
  //           <Dropdown overlay={menuCompany}>
  //             <a
  //               className="ant-dropdown-link"
  //               id="dropdown-link-navi"
  //               onClick={(e) => e.preventDefault()}
  //             >
  //               Công ty hàng đầu
  //             </a>
  //           </Dropdown>
  //         </Menu.Item>
  //         <Menu.Item id="header-item-right">Nhà tuyển dụng</Menu.Item>
  //         <Menu.Item id="switch">
  //           <Switch
  //             checkedChildren="VI"
  //             unCheckedChildren="EN"
  //             defaultChecked
  //             style={{ backgroundColor: "#1890ff" }}
  //           />
  //         </Menu.Item>
  //         {localStorage.getItem("Authorization") ? (
  //           <Menu.Item id="header-item-right-is-login" onClick={logoutHandle}>
  //             {localStorage.getItem("userName")}
  //           </Menu.Item>
  //         ) : (
  //           <Menu.Item id="header-item-right">
  //             <Link to="/signin" style={{ color: "white" }}>
  //               Đăng nhập
  //             </Link>
  //           </Menu.Item>
  //         )}
  //       </Menu>
  //     </Header>
  //   );
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="horizontal"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">
            <Link to="/signin">Đăng nhập</Link>
          </Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navigation;
