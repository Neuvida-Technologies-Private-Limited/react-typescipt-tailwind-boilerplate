import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Uploader } from "../../index";
import { Button, Dropdown, Label, TextArea } from "../../../common";
import { UserReport } from "../../../../utils/constants";
//APIs
import { CreateTicket } from "../../../../infra/api/auth/ticket-api";
//validations
import {
  isLocationValidated,
  isReportValidated,
} from "../../../../utils/validations";
// createTicket state
import { createTicketState } from "../../../../infra/state";

const options = [
  { value: "Fire in Beginning", label: "Fire in Beginning" },
  { value: "Fire with smoke", label: "Fire with smoke" },
  { value: "Extreme fire", label: "Extreme fire" },
];

const Report: React.FC = () => {
  const [state, setState] = useRecoilState(createTicketState);
  const [image, setImage] = useState<File | null>(null);
  // destructuring params
  const { location, locationError, report, reportError } = state;
  // reseting the states
  const resetLoginState = useResetRecoilState(createTicketState);

  const handleIncidentChange = (report: string) => {
    setState((old) => ({
      ...old,
      report,
      reportError: isReportValidated(report),
    }));
  };

  const handleFileSelected = (image: File | null) => {
    setImage(image);
  }

  const handleLocationChange = (location: string) => {
    setState((old) => ({
      ...old,
      location,
      locationError: isLocationValidated(location),
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setState((old) => ({
      ...old,
      isLoading: true,
      emailError: isReportValidated(report),
      passwordError: isLocationValidated(location),
    }));
    
    const createTicketObj = new FormData();
    createTicketObj.append('report', report);
    createTicketObj.append('location', location);
    if (image) {
      createTicketObj.append('image', image);
    }

    try {
      await CreateTicket(createTicketObj);
      toast.success(UserReport.TicketCreated);
      setImage(null);
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }

    resetLoginState();
  };

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="flex w-5/6 flex-col gap-5 pl-4"
    >
      <Label
        name={UserReport.CreateTicket}
        className="font-bold text-xl text-blue-700 w-1/4 mt-4"
      />
      <div className="user w-full flex items-start">
        <Label name={UserReport.Incident} className="font-bold text-sm w-1/4" />
        <Dropdown
          options={options}
          placeholder="Select the type of fire"
          className="w-3/4"
          onChange={handleIncidentChange}
          reportValue={report}
          error={reportError}
        />
      </div>
      <div className="flex w-full">
        <Label
          name={UserReport.UploadImage}
          className="font-bold text-sm w-1/4"
        />
        <Uploader onFileSelected = {handleFileSelected}/>
      </div>
      <div className="flex w-full">
        <Label name={UserReport.Location} className="font-bold text-sm w-1/4" />
        <TextArea
          className="w-3/4 pr-4"
          value={location}
          error={locationError}
          onChange={handleLocationChange}
        />
      </div>
      <div className="flex w-full justify-end">
        <div className="w-3/4">
          <Button
            name={"Create"}
            className="text-white bg-green-500 w-1/4 p-2 hover:shadow-md hover:bg-green-600 hover:shadow-green-300 transition-all ease-in-out duration-300"
          />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Report;
