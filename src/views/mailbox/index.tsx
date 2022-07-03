import { Menu } from 'antd'
import { Routes, Route, useLocation, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import style from './index.module.scss'
import Inbox from './views/inbox'
import Draftbox from './views/draftbox'
import ViewMail from './components/view-mail'

const items = [
  { label: '收件箱', id: 'u8ikjhgb', key: '/mailbox/inbox' },
  { label: '草稿', id: 'kjhn67gv', key: '/mailbox/draftbox' }
]

export default () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onMenuItemClick = (event: any) => {
    const path = event.key as string
    navigate(path, { replace: true })
  }

  const [searchParams] = useSearchParams()
  const mailkey = searchParams.get('mailkey')

  return (
    <div className="view">
      <Menu onClick={onMenuItemClick} selectedKeys={[location.pathname]} items={items} mode="horizontal" />
      <div style={{ height: 'calc(100% - 45.8px)', background: '#fff', display: 'flex' }}>
        <div className={style['view-wrapper']}>
          <Routes>
            <Route path="" element={<Navigate to="inbox" />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="draftbox" element={<Draftbox />} />
          </Routes>
        </div>
        {mailkey && ['/mailbox/inbox'].includes(location.pathname) ? <ViewMail /> : ''}
      </div>
    </div>
  )
}
