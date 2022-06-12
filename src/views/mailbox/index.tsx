import { useEffect } from 'react'
import { Menu } from 'antd'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import Inbox from './views/inbox'
import Draftbox from './views/draftbox'

const items = [
  { label: '收件箱', id: 'u8ikjhgb', key: '/mailbox/inbox' },
  { label: '草稿', id: 'kjhn67gv', key: '/mailbox/draftbox' },
  /* { label: '已发送邮件', key: 'afgr9olk' },
  { label: '已标记邮件', key: 'plokj345' },
  { label: '已删除邮件', key: 'plo8hjbg' },
  { label: '垃圾邮件', key: '7ytgjinb' } */
]

export default () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/mailbox') navigate(items[0].key, { replace: true })
  }, [])
  const onMenuItemClick = (event: any) => {
    const path = event.key as string
    navigate(path, { replace: true })
  }

  return (
    <div className="view">
      <Menu onClick={onMenuItemClick} defaultSelectedKeys={[location.pathname]} items={items} mode="horizontal" />
      <div className={style['view-wrapper']} style={{ height: 'calc(100% - 45.8px)' }}>
        <Routes>
          <Route path="inbox" element={<Inbox />} />
          <Route path="draftbox" element={<Draftbox />} />
        </Routes>
      </div>
    </div>
  )
}
