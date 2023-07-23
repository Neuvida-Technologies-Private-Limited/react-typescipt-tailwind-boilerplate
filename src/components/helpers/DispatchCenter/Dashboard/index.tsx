import React from "react";
import { DispatchTable, Label } from "../../../common";
import { DispatchDashboard } from "../../../../utils/constants";

const Report = () => {
  return (
    <div className="flex justify-start items-start h-full w-5/6 px-4 flex-col">
      <Label
        name={DispatchDashboard.Dashboard}
        className="font-bold text-xl text-blue-700 mt-2"
      />
      <DispatchTable />
    </div>
  );
};

export default Report;
