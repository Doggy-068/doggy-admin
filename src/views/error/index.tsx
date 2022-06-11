import { Empty } from 'antd'

export default () => {
  return (
    <div className="view">
      <Empty description="内容不存在" style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} />
    </div>
  )
}
