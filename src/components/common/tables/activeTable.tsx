import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
//constants
import {TableConst} from "../../../utils/constants"
//components
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
    title: `${TableConst.UploadedImage}`,
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
    title: `${TableConst.Location}`,
    dataIndex: "location",
    width: "30%",
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
    width: "10%",
  },
  {
    title: `${TableConst.Activity}`,
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
