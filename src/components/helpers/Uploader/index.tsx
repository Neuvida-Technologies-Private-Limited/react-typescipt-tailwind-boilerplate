import React, { useRef, useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { UserReport } from "../../../utils/constants";

interface UploaderProps {
  onFileSelected: (image: File | null) => void;
}

const Uploader: React.FC<UploaderProps> = ({onFileSelected}) => {


  const fileInputRef = useRef<HTMLInputElement>(null);
  const [Image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>(UserReport.NoSelected);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    selectedFile && setFileName(selectedFile.name);
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
      onFileSelected(selectedFile);
    }
    
  };
  const handleDeleteClick = () => {
    setImage("");
    setFileName(UserReport.NoSelected);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        action=""
        onClick={handleClick}
        className="flex flex-col justify-center items-center border-dashed border-blue-500 border-2 rounded-lg cursor-pointer h-48 w-72"
      >
        <input
          type="file"
          accept="image/*"
          className="input-field flex items-center hidden"
          ref={fileInputRef}
          onChange={handleChange}
        />
        {Image ? (
          <img src={Image} alt='Image' className="w-full min-h-full p-4" />
        ) : (
          <MdCloudUpload color="#1475cf" size={50} />
        )}
      </form>
      <div className="flex pt-2 gap-2 w-72 justify-between mt-2 bg-blue-100 rounded-md p-2 items-center">
        <AiFillFileImage color="#1475cf" className="w-10" size={20} />
        <span className="flex font-poppins text-xs items-center overflow-hidden">
          <p className=" w-full">{fileName}</p>
          
        </span>
        <MdDelete
            color="#1475cf"
            size={20}
            className="cursor-pointer w-10"
            onClick={handleDeleteClick}
          />
      </div>
    </div>
  );
};

export default Uploader;
