import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { TableConst } from "../../../utils/constants";
import Step from "../step";

interface DataType {
  key: React.Key;
  report: string;
  location: string;
  status: string;
  ticket_id:string;
  created_at: string;
  modified_at: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: `${TableConst.Incident}`,
    dataIndex: "report",
    filters: [
      {
        text: `${TableConst.FireBeginning}`,
        value: `${TableConst.FireBeginning}`,
      },
      {
        text: `${TableConst.FireSmoke}`,
        value: `${TableConst.FireSmoke}`,
      },
      {
        text: `${TableConst.Extremefire}`,
        value: `${TableConst.Extremefire}`,
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: DataType) =>
      record.report.startsWith(String(value)),
    width: "20%",
  },
  {
    title: `${TableConst.Location}`,
    dataIndex: "location",
    width: "30%",
  },
  {
    title: `${TableConst.Status}`,
    dataIndex: "status",
    filters: [
      {
        text: `${TableConst.Resolved}`,
        value: `${TableConst.Resolved}`,
      },
      {
        text: `${TableConst.False}`,
        value: `${TableConst.False}`,
      },
    ],
    onFilter: (value: string | number | boolean, record: DataType) =>
      record.status.startsWith(String(value)),
    filterSearch: true,
    width: "15%",
  },
  {
    title: `${TableConst.Activity}`,
    key: "operation",
    width: '35%',
    render: (_, record) => {
      return <Step ticketID={record.ticket_id} created={record.created_at} modified={record.modified_at} status={record.status}/>;
    },
  },
];

interface InActiveTableProp {
  data: DataType[];
}

const Index: React.FC<InActiveTableProp> = ({ data }) => {
  const filteredData = data.filter(
    (record) => record.status === "RESOLVED" || record.status === "FALSE_ALARM"
  );
  return (
    <Table columns={columns} dataSource={filteredData} className="w-full" scroll={{ y: 300 }}/>
  );
};

export default Index;
