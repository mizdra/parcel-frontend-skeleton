import { Button, Icon, Layout, Menu } from 'antd'
import React, { useState } from 'react'

const { Footer, Content, Sider } = Layout

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Layout>
        <Sider
          style={{
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            backgroundColor: '#fff',
            padding: 30,
          }}
        >
          <Button onClick={() => setCount(count + 1)}>Count up: {count}</Button>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
