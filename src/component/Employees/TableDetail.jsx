
import React from 'react'
import { Table } from 'antd';

const DefindColumn = [
    {
        title: '#',
        dataIndex: 'Pn',
    },
    {
        title: 'Checklist',
        dataIndex: 'Checklist',
    },
    {
        title: 'Date',
        dataIndex: 'Date',
    },
    {
        title: 'Duration',
        dataIndex: 'Duration',
    }
]
const data = [
    {
      key: '1',
      Pn: 'John Brown',
      Checklist: 32,
      Date: 'New York No. 1 Lake Park',
      Duration: ['nice', 'developer'],
    },
    {
      key: '2',
      Pn: 'John Brown',
      Checklist: 32,
      Date: 'New York No. 1 Lake Park',
      Duration: ['nice', 'developer'],
    },
    {
      key: '3',
      Pn: 'John Brown',
      Checklist: 32,
      Date: 'New York No. 1 Lake Park',
      Duration: ['nice', 'developer'],
    },
  ];
export default function TableDetail() {
    return (
        <Table
            rowSelection= {null}
            columns={DefindColumn}
            dataSource={data}
            pagination={false}
            className="table__main"
        />
    )
}
