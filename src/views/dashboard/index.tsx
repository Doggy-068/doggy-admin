import { Space, Row, Col, Card, Statistic, List, Typography } from 'antd'
import { MessageOutlined, UserOutlined, BulbOutlined, PayCircleOutlined } from '@ant-design/icons'
import { Line, LineConfig, Column, ColumnConfig, Funnel, FunnelConfig } from '@ant-design/plots'
import dayjs from '@/lib/dayjs'

const lineConfig: LineConfig = {
  data: [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
    const date = dayjs().subtract(index + 1, 'days').format('MM-DD')
    const value = Math.ceil(Math.random() * 255)
    return { date, '访客数': value }
  }).reverse(),
  height: 200,
  xField: 'date',
  yField: '访客数',
  point: {
    size: 4,
    shape: 'circle'
  }
}

const columnConfig: ColumnConfig = {
  data: [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
    const date = dayjs().subtract(index + 1, 'days').format('MM-DD')
    const value = Math.ceil(Math.random() * 2000)
    return { date, '交易额': value }
  }).reverse(),
  height: 200,
  xField: 'date',
  yField: '交易额'
}

const mailList = [
  { title: 'Circles, Coils, and Concentration', from: { name: 'CodePen', mailbox: 'support@codepen.io' } },
  { title: 'Building for positive impact at scale', from: { name: 'Community Team at Mapbox', mailbox: 'community@mapbox.com' } },
  { title: '[npm] A security key was added to your account', from: { name: 'npm', mailbox: 'support@npmjs.com' } },
  { title: 'welcome to Flutter!', from: { name: 'Flutter', mailbox: 'flutter-no-reply@google.com' } },
  { title: '[GitHub] A third-party OAuth application has been added to your account', from: { name: 'GitHub', mailbox: 'noreply@github.com' } },
  { title: 'Apple 提供的收据', from: { name: 'Apple', mailbox: 'no_reply@email.apple.com' } },
  { title: '歡迎使用您的 EA 帳號', from: { name: 'EA', mailbox: 'EA@e.ea.com' } }
]

const funnelConfig: FunnelConfig = {
  data: [
    { stage: '询盘', number: 400 },
    { stage: '定金', number: 300 },
    { stage: '发货', number: 200 },
    { stage: '收款', number: 100 }
  ],
  height: 200,
  xField: 'stage',
  yField: 'number',
  isTransposed: true,
  shape: 'pyramid',
  tooltip: {
    formatter: data => ({ name: data.stage, value: `${data.number}个` })
  }
}

export default () => {
  return (
    <div className="view">
      <Space direction="vertical" size={16} style={{ display: 'flex' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic title="访客数" value={100} prefix={<UserOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="商谈量" value={20} prefix={<MessageOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="成交量" value={5} prefix={<BulbOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="交易额 (CNY)" value={2304} prefix={<PayCircleOutlined />} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="近7天访客数">
              <Line {...lineConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="近7天交易额 (CNY)">
              <Column {...columnConfig} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="收件箱">
              <div style={{ height: '200px', overflowY: 'auto' }}>
                <List size="small" dataSource={mailList} renderItem={item => (
                  <List.Item>
                    <Row gutter={16} style={{ width: '100%' }}>
                      <Col span={6}>
                        <Typography.Text ellipsis>{`${item.from.name} <${item.from.mailbox}>`}</Typography.Text>
                      </Col>
                      <Col span={15}>
                        <Typography.Text ellipsis>{item.title}</Typography.Text>
                      </Col>
                      <Col span={3}>
                        <Typography.Text ellipsis>{dayjs().format('MM-DD')}</Typography.Text>
                      </Col>
                    </Row>
                  </List.Item>
                )} />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="商机推进">
              <Funnel {...funnelConfig} />
            </Card>
          </Col>
        </Row>
      </Space >
    </div >
  )
}
