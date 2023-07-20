import React from "react";
import { Uploader } from "../../index";
import { Button, Dropdown, Label, TextArea } from "../../../common";
import { UserReport } from "../../../../utils/constants";

const options = [
  { value: "fire in beginning", label: "Fire in Beginning" },
  { value: "fire with smoke", label: "Fire with smoke" },
  { value: "extreme fire", label: "Extreme fire" },
];

const Report: React.FC = () => {
  function handleLocationChange(value: string): void {}

  return (
    <form action="" method="post">
    <div className="flex w-5/6 flex-col gap-5 pl-4">
      <div className="user w-full flex">
        <Label
          name={UserReport.Incident}
          className="mt-4 font-bold text-md w-1/4"
        />
        <Dropdown
          options={options}
          placeholder="Select the type of fire"
          className="w-3/4"
        />
      </div>
      <div className="flex w-full">
        <Label
          name={UserReport.UploadImage}
          className="font-bold text-md w-1/4"
        />
        <Uploader />
      </div>
      <div className="flex w-full">
        <Label name={UserReport.Location} className="font-bold text-md w-1/4" />
        <TextArea className="w-3/4 pr-4" />
      </div>
      <div className="flex w-full justify-end">
        <div className="w-3/4">
          <Button name={"Create"} className="text-white bg-green-500 w-1/4 p-2 hover:shadow-md hover:bg-green-600 hover:shadow-green-300 transition-all ease-in-out duration-300" />
        </div>
      </div>
    </div>
    </form>
  );
};

export default Report;
