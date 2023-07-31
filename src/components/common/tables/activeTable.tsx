import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import Step from "../step";

interface DataType {
  key: React.Key;
  report: string;
  user_image: string;
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
    width: "20%",
  },
  {
    title: "Uploaded Image",
    dataIndex: "user_image",
    width: "20%",
    render: (userImage: string) =>
      userImage ? (
        <img
          src={`data:image/jpeg;base64,${userImage}`}
          alt="Uploaded"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      ) : null,
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
    width: "30%",
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
    width: "10%",
  },
  {
    title: "Activity",
    key: "operation",
    width: '20%',
    render: () => {
      return <Step />;
    },
  },
];

interface ActiveTableProp {
  data: DataType[]
}

const Index: React.FC<ActiveTableProp> = ({data}) => (
  <Table
    columns={columns}
    dataSource={data}
    className="w-full"
  />
);

export default Index;
