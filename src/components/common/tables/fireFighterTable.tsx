import React, { ReactNode, useEffect } from "react";
import { ConfirmDropdown, Step } from "../index";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { FireFighterDashboard } from "../../../utils/constants";
import { firefighterState } from "../../../infra/state";
import { GetDispatchCenterList } from "../../../infra/api/auth";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DataType {
  key: React.Key;
  report: string;
  location: string;
  status: string;
  ticket_id: string;
}
interface OptionItems {
  value: string;
  label: string;
  email: string;
}
interface APIResponseData {
  first_name: string;
  last_name: string;
  email: string;
}
interface ActiveTableProp {
  data: DataType[];
}

const Index: React.FC<ActiveTableProp> = ({ data }) => {
  const [options, setOptions] = React.useState<OptionItems[]>([]);

  const getDispatchCenterList = async () => {
    try {
      const res = await GetDispatchCenterList();

      const convertResponseToOptions = (
        responseData: APIResponseData[]
      ): OptionItems[] => {
        return responseData.map((data) => ({
          value: `${data.first_name} ${data.last_name}`,
          label: `${data.first_name} ${data.last_name}`,
          email: data.email,
        }));
      };

      setOptions(convertResponseToOptions(res));
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }
  };

  useEffect(() => {
    getDispatchCenterList();
  }, []);
  const columns: ColumnsType<DataType> = [
    {
      title: "Incident",
      dataIndex: "report",
      fixed: "left",
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
        record.report.startsWith(String(value)),
      width: 200,
    },
    {
      title: "Location",
      dataIndex: "location",
      width: 200,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 130,
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
    },
    {
      title: "Choose Dispatch Center",
      key: "operation",
      width: 220,
      render: (_, record) => {
        return (
          <ConfirmDropdown
            ticketID={record.ticket_id}
            options={options}
            placeholder={FireFighterDashboard.Assign}
            className="Firefighter"
          />
        );
      },
    },
    {
      title: "Activity",
      key: "operation",
      width: 120,
      render: () => {
        return <Step />;
      },
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Table
        columns={columns}
        dataSource={data}
        className="w-full mt-2 text-xs"
        scroll={{ x: "calc(300px + 60%)", y: 350 }}
      />
      <ToastContainer />
    </div>
  );
};

export default Index;
