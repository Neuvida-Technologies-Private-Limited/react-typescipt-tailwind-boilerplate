import React, { ReactChildren, ReactComponentElement, ReactNode } from "react";
import { DispatchModal, Step } from "../index";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  incident: string;
  location: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Incident",
    dataIndex: "incident",
    filters: [
      {
        text: "Fire in beginning",
        value: "Fire in beginning",
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
      record.incident.startsWith(String(value)),
    width: "20%",
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
    title: "Options",
    dataIndex: "dispatchModal",
    filterSearch: true,
    width: "20%",
    render: () => {
      return <DispatchModal />;
    },
  },
  {
    title: "Activity",
    key: "operation",
    width: "20%",
    render: () => {
      return <Step />;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    incident: "Fire in beginning",
    location: "",
    status: "Pending",
  },
];

const Index: React.FC = () => {
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
