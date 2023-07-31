import React, { useEffect } from "react";
import { Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ColumnsType } from "antd/es/table";
//components
import { ConfirmDropdown, Step } from "../index";
//constants
import { FireFighterDashboard, TableConst } from "../../../utils/constants";
//APIs
import { GetDispatchCenterList } from "../../../infra/api/auth";

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
      title: `${TableConst.Incident}`,
      dataIndex: "report",
      fixed: "left",
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
      width: 120,
    },
    {
      title: `${TableConst.Location}`,
      dataIndex: "location",
      width: 200,
    },
    {
      title: `${TableConst.Status}`,
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
      title: `${TableConst.Choose}`,
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
      title: `${TableConst.Activity}`,
      key: "operation",
      width: 150,
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
