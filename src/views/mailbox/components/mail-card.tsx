import { Space, Avatar, Typography } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import style from './mail-card.module.scss'

const colors = ['#f56a00', '#d4380d', '#faad14', '#a0d911', '#096dd9', '#722ed1']
const length = colors.length

export default (props: { data: { key: string, mailbox: string, nickname: string, title: string, content: string, date: string }, isDraft?: boolean }) => {
  const color = colors[Math.floor(Math.random() * length)]
  const navigate = useNavigate()
  const onClick = (key: string) => navigate(`.?mailkey=${key}`)

  const [searchParams] = useSearchParams()
  const mailkey = searchParams.get('mailkey')

  return (
    <div onClick={() => onClick(props.data.key)} className={`${style['mail-card']} ${mailkey === props.data.key ? 'selected' : ''}`} style={{ boxSizing: 'border-box', width: '100%', padding: '10px', display: 'flex', borderBottom: '1px solid #eee' }}>
      <Avatar style={{ flexShrink: 0, background: color, marginRight: '10px' }}>{props.data.nickname ? props.data.nickname.slice(0, 1) : props.data.mailbox.slice(0, 1)}</Avatar>
      <Space style={{ width: 'calc(100% - 130px)' }} direction="vertical" size={0}>
        <Typography.Text strong ellipsis>{props.data.nickname || props.data.mailbox}</Typography.Text>
        <Typography.Text ellipsis>
          {props.isDraft ? <Typography.Text type="danger">[草稿]</Typography.Text> : ''}
          {props.data.title}
        </Typography.Text>
        <Typography.Text type="secondary" ellipsis>{props.data.content}</Typography.Text>
      </Space>
      <div style={{ flexShrink: 0, width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Typography.Text type="secondary">{props.data.date}</Typography.Text>
      </div>
    </div>
  )
}
