import { Typography, Layout, Menu, Avatar, Col, Row, Popover, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './views/dashboard'
import Product from './views/product'
import Mailbox from './views/mailbox'
import Error from './views/error'
import style from './App.module.scss'
import { version } from '../package.json'

const { Sider, Header, Content } = Layout

const items = [
  { label: '看板', key: '/' },
  { label: '产品管理', key: '/product' },
  { label: '邮箱', key: '/mailbox' }
]

export default () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onMenuItemClick = (event: any) => {
    const key = event.key as string
    navigate(key, { replace: true })
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Layout style={{ height: '100%' }}>
        <Header>
          <Row justify="space-between">
            <Col>
              <div style={{ display: 'flex' }}>
                <Typography.Title style={{ color: '#fff' }}>doggy-admin</Typography.Title>
                <Typography.Text style={{ color: '#fff', marginLeft: '1em' }}>{version}</Typography.Text>
              </div>
            </Col>
            <Col>
              <Popover trigger="click" content={
                <Button type="text" danger>退出</Button>
              }>
                <Avatar className="cursor-pointer" icon={<UserOutlined />} />
              </Popover>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider theme="light">
            <Menu onClick={onMenuItemClick} defaultSelectedKeys={[location.pathname]} items={items} />
          </Sider>
          <Content className={style['view-wrapper']}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/mailbox" element={<Mailbox />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div >
  )
}
