import React, { useEffect } from "react";
import { Label, IconButton, ActiveTable, InActiveTable } from "../../../common";
import { UserHistory } from "../../../../utils/constants";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { ticketState } from "../../../../infra/state";
import { GetTicket } from "../../../../infra/api/auth/ticket-api";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onChange = (key: string) => {};

const History = () => {
  const [state, setState] = useRecoilState(ticketState);
  const { ticket_history } = state;
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Active`,
      children: <ActiveTable data={ticket_history} />,
    },
    {
      key: "2",
      label: `Resolved`,
      children: <InActiveTable />,
    },
  ];

  const handleRefresh = async () => {
    try {
      const res = await GetTicket();
      setState((old) => ({
        ...old,
        ticket_history: res.ticket_history,
      }));
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleRefresh();
  });

  return (
    <div className="px-4 py-2 w-5/6">
      <div className="flex justify-between items-start">
        <Label
          name={UserHistory.History}
          className="font-bold text-xl text-blue-700 mt-2"
        />
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="font-poppins items-center"
        />
        <IconButton
          name={UserHistory.Refresh}
          className="bg-green-500 h-10 hover:shadow-md hover:bg-green-600 hover:shadow-green-300 transition-all ease-in-out duration-300"
          onClick={handleRefresh}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default History;
