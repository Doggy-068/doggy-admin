import { useState } from 'react'
import { Table, Button, Popconfirm, Typography, Space, Form, Select, Input } from 'antd'
import { FileExcelFilled } from '@ant-design/icons'
import { useLeast } from '@/hooks'
import { utils, writeFile } from 'xlsx'

const productListCache = [
  { id: 'hjuyg356', name: 'Surface Pro 7', classfiy: { name: 'computer', id: 'uhji7654' }, minPrice: 3000, stock: 10 },
  { id: 'lki876fr', name: 'Surface Laptop 4', classfiy: { name: 'computer', id: 'uhji7654' }, minPrice: 3500, stock: 13 },
  { id: 'olp87ghu', name: 'Surface Go 2', classfiy: { name: 'computer', id: 'uhji7654' }, minPrice: 2500, stock: 29 },
  { id: 'plcds123', name: 'MacBook Air', classfiy: { name: 'computer', id: 'uhji7654' }, minPrice: 9000, stock: 5 },
  { id: 'oku4dsvg', name: 'AirPods', classfiy: { name: 'earphone', id: 'werft432' }, minPrice: 200, stock: 100 },
  { id: 'plbvdcxs', name: 'iPhone 13', classfiy: { name: 'phone', id: 'ikmnb4ds' }, minPrice: 9000, stock: 60 },
  { id: 'oplg654f', name: 'iPhone 12', classfiy: { name: 'phone', id: 'ikmnb4ds' }, minPrice: 5000, stock: 20 },
  { id: 'opu6tgfd', name: 'Pixel 3a XL', classfiy: { name: 'phone', id: 'ikmnb4ds' }, minPrice: 2000, stock: 25 },
  { id: 'oi78ytcv', name: 'Pixel 4', classfiy: { name: 'phone', id: 'ikmnb4ds' }, minPrice: 5000, stock: 38 },
  { id: 'oplfvg56', name: 'Pixel 5', classfiy: { name: 'phone', id: 'ikmnb4ds' }, minPrice: 5300, stock: 68 }
]

const getNameByKey = (() => {
  const key2name = new Map<string, string>()
  key2name.set('id', 'ID')
  key2name.set('name', '产品名称')
  key2name.set('classfiy', '类目')
  key2name.set('minPrice', '最低售价 (CNY)')
  key2name.set('stock', '库存')
  return (key: string): string => {
    return key2name.get(key) || ''
  }
})()

export default () => {
  const [productList, setProductList] = useState(productListCache)

  const [form, setForm] = useState({ name: '', classfiyId: '' })
  const onSearch = () => setProductList(productListCache.filter(item => item.name.includes(form.name) && (form.classfiyId === '' || item.classfiy.id === form.classfiyId)))

  const { increase, isReach } = useLeast(3)
  const onDeleteClick = (id: string) => {
    console.log(`删除id为${id}的产品`)
  }
  const onDeleteConfirm = (id: string) => {
    onDeleteClick(id)
    increase()
  }

  const exportExcel = () => {
    const data = productList.map(item => ({ ...item, classfiy: item.classfiy.name }))
    const sheet = utils.json_to_sheet(data)
    const book = utils.book_new()
    utils.book_append_sheet(book, sheet, 'products')
    utils.sheet_add_aoa(sheet, [Object.keys(data[0]).map(key => getNameByKey(key))], { origin: 'A1' })
    writeFile(book, 'products.xlsx')
  }

  return (
    <div className="view">
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Form layout="inline" style={{ background: '#fff', padding: '1em' }}>
          <Form.Item label="产品名称">
            <Input value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} />
          </Form.Item>
          <Form.Item label="类目">
            <Select allowClear style={{ width: '150px' }} value={form.classfiyId} onSelect={(classfiyId: string) => setForm({ ...form, classfiyId })} onClear={() => setForm({ ...form, classfiyId: '' })}>
              <Select.Option value="uhji7654">computer</Select.Option>
              <Select.Option value="werft432">earphone</Select.Option>
              <Select.Option value="ikmnb4ds">phone</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button onClick={onSearch} type="primary">查询</Button>
          </Form.Item>
        </Form>
        <Table scroll={{ y: 400 }} dataSource={productList} rowKey="id" pagination={false}>
          <Table.Column title={getNameByKey('name')} dataIndex="name" render={name => (
            <Typography.Text copyable>{name}</Typography.Text>
          )} />
          <Table.Column title={getNameByKey('classfiy')} dataIndex={['classfiy', 'name']} />
          <Table.Column title={getNameByKey('minPrice')} dataIndex="minPrice" />
          <Table.Column title={getNameByKey('stock')} dataIndex="stock" />
          <Table.Column title="操作" dataIndex="id" render={id => {
            if (isReach) {
              return <Button onClick={() => onDeleteClick(id)} size="small" danger>删除</Button>
            } else {
              return (
                <Popconfirm placement="left" title="确认删除?（此操作不可恢复）" showCancel={false} onConfirm={() => onDeleteConfirm(id)} >
                  <Button size="small" danger>删除</Button>
                </Popconfirm>
              )
            }
          }} />
        </Table>
        <Space size={16}>
          <Button disabled={productList.length === 0} onClick={exportExcel} type="primary" icon={<FileExcelFilled />}>导出为 EXCEL</Button>
        </Space>
      </Space>
    </div>
  )
}
