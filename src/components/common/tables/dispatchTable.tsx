import React, { ReactNode } from "react";
import {ConfirmDropdown, Step} from "../index";
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
      email: '',
    },
    {
      value: 'false_alarm',
      label: 'False_Alarm',
      email: '',
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
    title: "Set Status",
    dataIndex: "setStatus",
    filterSearch: true,
    width: "20%",
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

const data: DataType[] = [
  {
    key: "1",
    incident: "Fire in beginning",
    location: "",
    status: "Pending",
    setStatus: <ConfirmDropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2" ticketID=""/>,
  },
  {
    key: "2",
    incident: "Fire with smoke",
    location: "",
    status: "Pending",
    setStatus: <ConfirmDropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2" ticketID=""/>,
  },
  {
    key: "3",
    incident: "Extreme Fire",
    location: "",
    status: "Active",
    setStatus: <ConfirmDropdown options={options} placeholder={DispatchDashboard.Select} className="w-1/2" ticketID=""/>,
  },
];

const Index: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    className="w-full mt-2"
    scroll={{y: 350 }}
  />
);

export default Index;
