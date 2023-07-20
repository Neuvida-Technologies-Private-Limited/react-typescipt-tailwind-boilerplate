import React, { useRef, useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const Uploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("No selected file");

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
    }
  };
  const handleDeleteClick = () => {
    setImage("");
    setFileName("No selected file");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        action=""
        onClick={handleClick}
        className="flex flex-col justify-center items-center border-dashed border-blue-500 border-2 rounded-lg cursor-pointer h-64 w-96"
      >
        <input
          type="file"
          accept="image/*"
          className="input-field flex items-center hidden"
          ref={fileInputRef}
          onChange={handleChange}
        />
        {image ? (
          <img src={image} className="w-full min-h-full p-4" />
        ) : (
          <MdCloudUpload color="#1475cf" size={50} />
        )}
      </form>
      <div className="flex pt-2 gap-4">
        <AiFillFileImage color="#1475cf" size={20} />
        <span className="flex font-poppins justify-between">
          {fileName}
          <MdDelete
            color="#1475cf"
            size={20}
            className="cursor-pointer ml-4"
            onClick={handleDeleteClick}
          />
        </span>
      </div>
    </div>
  );
};

export default Uploader;
