import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { LogoutOutlined, TagsOutlined } from '@ant-design/icons/lib/icons';
import { FloatButton, Layout, Menu, theme } from 'antd';
import React, { ReactNode, useState } from 'react';
import styles from "./InternalLayout.module.css";

const { Header, Sider, Content } = Layout;

export function InternalLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/estoque']}
          items={[
            {
              key: '/estoque',
              icon: <TagsOutlined />,
              label: 'Estoque',
            },
            {
              key: '/logout',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            {children}
            <FloatButton.BackTop style={{ right: 80 }} />
        </Content>
      </Layout>
    </Layout>
  );
};

