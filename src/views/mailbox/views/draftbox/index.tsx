import MailCard from '../../components/mail-card'

const mailList = [
  { key: 'gg53t2t5', mailbox: 'no-reply@onedrive.com', nickname: 'One Drive', title: '这些文件是近期从你的 OneDrive 中删除的', content: '将在文件删除后 30 天从 OneDrive 回收站中永久删除它们', date: '2022/06/06' },
  { key: '3tyygtht', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'bnynrth', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'nhntj', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'jty', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'er', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: '3tyyhyrgtht', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: '3tyyg535tht', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'hffy', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'kikiuk', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'vdbs', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' },
  { key: 'rtre', mailbox: 'msa@communication.microsoft.com', nickname: 'Microsoft', title: '使用条款更新', content: '您好，您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，', date: '2022/04/06' }
]

export default () => {
  return (
    <div className="view">
      {mailList.map(item => <MailCard key={item.key} data={item} isDraft />)}
    </div>
  )
}
