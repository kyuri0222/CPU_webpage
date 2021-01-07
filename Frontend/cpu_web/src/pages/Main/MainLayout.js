import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './MainLayout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header className="header">
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <div className="logo" />
            <Menu.Item key="1">공지사항</Menu.Item>
            <Menu.Item key="2">복지사업</Menu.Item>
            <SubMenu key="sub1" icon={<NotificationOutlined />} title="게시판">
              <Menu.Item key="1">취업 게시판</Menu.Item>
              <Menu.Item key="2">자유 게시판</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 50,
              minHeight: 280,
            }}
          >
            내용
        </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;