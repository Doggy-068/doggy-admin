import { Menu } from 'antd'

const items = [
  { label: '收件箱', key: 'u8ikjhgb' },
  { label: '草稿', key: 'kjhn67gv' },
  { label: '已发送邮件', key: 'afgr9olk' },
  { label: '已标记邮件', key: 'plokj345' },
  { label: '已删除邮件', key: 'plo8hjbg' },
  { label: '垃圾邮件', key: '7ytgjinb' }
]

const mailList = [
  { title: '使用条款更新', from: { name: 'Microsoft', mailbox: 'msa@communication.microsoft.com' } }
]

export default () => {
  return (
    <div className="view">
      <Menu items={items} mode="horizontal" />
    </div>
  )
}
