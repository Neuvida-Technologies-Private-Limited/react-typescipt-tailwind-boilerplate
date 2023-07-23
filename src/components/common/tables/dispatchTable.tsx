import React, { ReactNode } from "react";
import {Dropdown} from "../index";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { DispatchDashboard } from "../../../utils/constants";

interface DataType {
  key: React.Key;
  incident: string;
  location: string;
  status: string;
  setStatus: ReactNode;
}
const options = [
    {
      value: 'resolved',
      label: 'Resolved',
    },
    {
      value: 'false_alarm',
      label: 'False_Alarm',
    },
  ];


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
    width: "30%",
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
    title: "Set Status",
    dataIndex: "setStatus",
    filterSearch: true,
    width: "30%",
  },
];

const data: DataType[] = [
  {
    key: "1",
    incident: "Fire in beginning",
    location: "",
    status: "Pending",
    setStatus: <Dropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2"/>,
  },
  {
    key: "2",
    incident: "Fire with smoke",
    location: "",
    status: "Pending",
    setStatus: <Dropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2"/>,
  },
  {
    key: "3",
    incident: "Extreme Fire",
    location: "",
    status: "Active",
    setStatus: <Dropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2"/>,
  },
  {
    key: "4",
    incident: "Fire with smoke",
    location: "",
    status: "Active",
    setStatus: <Dropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2"/>,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const Index: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    className="w-full mt-2"
  />
);

export default Index;
