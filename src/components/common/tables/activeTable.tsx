import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  report: string;
  image: File | null;
  location: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Incident",
    dataIndex: "report",
    filters: [
      {
        text: "Fire in Beginning",
        value: "Fire in Beginning",
      },
      {
        text: "Fire with smoke",
        value: "Fire with smoke",
      },
      {
        text: "Extreme fire",
        value: "Extreme fire",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: DataType) =>
      record.report.startsWith(String(value)),
    width: "40%",
  },
  {
    title: "Uploaded Image",
    dataIndex: "user_image",
    width: "40%",
  },
  {
    title: "Location",
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
      record.location.startsWith(String(value)),
    width: "40%",
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
    width: "40%",
  },
];

interface ActiveTableProp {
  data: DataType[]
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const Index: React.FC<ActiveTableProp> = ({data}) => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    className="w-full"
  />
);

export default Index;
