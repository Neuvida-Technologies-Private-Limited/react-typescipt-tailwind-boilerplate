import React from "react";
import { Uploader } from "../../index";
import { Dropdown, Input, Label, TextArea } from "../../../common";
import { UserReport } from "../../../../utils/constants";

const options = [
  { value: "fire in beginning", label: "Fire in Beginning" },
  { value: "fire with smoke", label: "Fire with smoke" },
  { value: "extreme fire", label: "Extreme fire" },
];

const Report: React.FC = () => {
  function handleLocationChange(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex w-5/6 flex-col gap-5 pl-4">
      <div className="user w-full flex items-center gap-4">
        <Label name={UserReport.Incident} className="mt-4 font-bold text-md" />
        <Dropdown options={options} placeholder="Select the type of fire" />
      </div>
      <div>
        <Label
          name={UserReport.UploadImage}
          className="mt-4 font-bold text-md"
        />
        <Uploader />
      </div>
      <div className="flex mt-6">
        <Label name={UserReport.Location} className="font-bold text-md" />
        <TextArea className="w-2/3 border border-gray-400 rounded-lg p-3 text-xs font-poppins h-24 ml-4"/>
      </div>
    </div>
  );
};

export default Report;
