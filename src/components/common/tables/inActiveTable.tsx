import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  incident: string;
  location: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Incident',
    dataIndex: 'incident',
    filters: [
      {
        text: 'Fire in beginning',
        value: 'Fire in beginning',
      },
      {
        text: 'Fire with smoke',
        value: 'Fire with smoke',
      },
      {
        text: 'Extreme fire',
        value: 'Extreme fire',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: DataType) => record.incident.startsWith(String(value)),
    width: '40%',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    filters: [
      {
        text: '',
        value: '',
      },
      {
        text: '',
        value: '',
      },
      {
        text: '',
        value: '',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: DataType) => record.incident.startsWith(String(value)),
    width: '40%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string | number | boolean, record: DataType) => record.status.startsWith(String(value)),
    filterSearch: true,
    width: '40%',
  },
];

const data: DataType[] = [
  {
    key: '1',
    incident: 'Fire in beginning',
    location: '',
    status: 'Inactive',
  },
  {
    key: '2',
    incident: 'Fire with smoke',
    location: '',
    status: 'Inactive',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
};

const Index: React.FC = () => <Table columns={columns} dataSource={data} onChange={onChange} className='w-full'/>;

export default Index;