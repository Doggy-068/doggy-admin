import { RollbackOutlined, ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons'
import { Typography, Avatar, Space } from 'antd'
import style from './view-mail.module.scss'

export default () => {
  return (
    <div style={{ boxSizing: 'border-box', padding: '0 32px', width: '100%', height: '100%' }}>
      <div style={{ height: '40px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div className={style['control-item']}>
          <RollbackOutlined />
          <span>答复</span>
        </div>
        <div className={style['control-item']}>
          <RollbackOutlined />
          <span>全部答复</span>
        </div>
        <div className={style['control-item']}>
          <ArrowRightOutlined />
          <span>转发</span>
        </div>
        <div className={style['control-item']}>
          <DeleteOutlined />
          <span>删除</span>
        </div>
      </div>
      <div style={{ height: '120px', width: '100%', overflowY: 'auto' }}>
        <Typography.Title level={4} style={{ margin: 0 }}>使用条款更新</Typography.Title>
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
          <Avatar style={{ flexShrink: 0, width: '36px', height: '36px', background: '#096dd9', marginRight: '10px' }}>M</Avatar>
          <Space direction="vertical" size={0}>
            <Typography.Text strong>{`Mic <123456@out.com>`}</Typography.Text>
            <Typography.Text>2022/06/06</Typography.Text>
          </Space>
        </div>
        <Space direction="vertical" size={0} style={{ fontSize: 'smaller' }}>
          <Typography.Text type="secondary">{'收件人：1234@qq.com'}</Typography.Text>
        </Space>
      </div>
      <div style={{ height: 'calc(100% - 160px)', width: '100%', overflow: 'hidden' }}>
        <iframe height="100%" width="100%" style={{ border: 'none' }} src="https://react.docschina.org/" />
      </div>
    </div>
  )
}
