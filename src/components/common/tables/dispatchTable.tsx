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
      record.incident.startsWith(String(value)),
    width: "20%",
  },
  {
    title: `${TableConst.Location}`,
    dataIndex: "location",
    filters: [
      {
        text: "",
        value: "",
      },
      {
        text: "",
        value: "",
      },
      {
        text: "",
        value: "",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: DataType) =>
      record.incident.startsWith(String(value)),
    width: "25%",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
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
    render: () => {
      return <DispatchModal />;
    },
  },
  {
    title:`${TableConst.Activity}`,
    key: "operation",
    width: "20%",
    render: () => {
      return <Step />;
    },
  },
];

interface DispatchTableProp {
  data: DataType[]
}
const Index: React.FC<DispatchTableProp> = ({data}) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      className="w-full mt-2"
      scroll={{ y: 350 }}
    />
  );
};

export default Index;
