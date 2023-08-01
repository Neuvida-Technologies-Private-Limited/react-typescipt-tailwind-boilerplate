import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
//components
import { DispatchModal, Step } from "../index";
//constants
import { TableConst } from "../../../utils/constants";

interface DataType {
  key: React.Key;
  incident: string;
  location: string;
  status: string;
  ticket_id: string;
  created_at: string;
  modified_at: string;
}

interface DispatchTableProp {
  data: DataType[];
}
const Index: React.FC<DispatchTableProp> = ({ data }) => {
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
        record.incident.startsWith(String(value)),
      width: "20%",
    },
    {
      title: `${TableConst.Location}`,
      dataIndex: "location",
      width: "25%",
    },
    {
      title: `${TableConst.Status}`,
      dataIndex: "status",
      filters: [
        {
          text: `${TableConst.Created}`,
          value: `${TableConst.Created}`,
        },
        {
          text: `${TableConst.Assigned}`,
          value: `${TableConst.Assigned}`,
        },
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
      title: `${TableConst.Options}`,
      dataIndex: "dispatchModal",
      filterSearch: true,
      width: "20%",
      render: (_, record) => {
        return <DispatchModal ticketID={record.ticket_id}/>;
      },
    },
    {
      title: `${TableConst.Activity}`,
      key: "operation",
      width: "20%",
      render: (_, record) => {
        return <Step ticketID={record.ticket_id} created={record.created_at} modified={record.modified_at} status={record.status}/>;
      },
    },
  ];
  const filteredData = data.filter(
    (record) => record.status === 'ASSIGNED' || record.status === 'CREATED'
  );
  return (
    <Table
      columns={columns}
      dataSource={filteredData}
      className="w-full mt-2"
      scroll={{ y: 350 }}
    />
  );
};

export default Index;
