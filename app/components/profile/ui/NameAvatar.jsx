"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import placeImg from "../placeholders/avatar.png";

export default function NameAvatar({ name = "Username", img = placeImg }) {
  const fileInputRef = useRef(null);
  const [currentimg, setCurrentImg] = useState(img);
  /*to set custom style for change avatar , I put an button with 
    the requierd style , and put an input type file to manage getting 
    the image , when we click on the change avatar button , it emit 
    a click event to the input:file and we can upload the image
    and with onChange prop we can handle the upload
  */
  function handleClick() {
    fileInputRef.current.click();
  }
  function handleUpload(e) {
    const file = e.target.files[0];
    //first read the file and update the Image component with the new image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCurrentImg(reader.result.toString());
    };
    //TODO : add upload to backend code
  }
  return (
    <div className="flex items-center gap-2">
      <Image
        src={currentimg}
        width={200}
        height={200}
        alt="Placeholder"
        className="rounded-full max-w-16 h-16"
      />
      <div>
        <p className="font-bold text-lg">{name}</p>
        <button className="text-sm text-purple-600" onClick={handleClick}>
          Change avatar
        </button>
      </div>
      <input
        onChange={(e) => handleUpload(e)}
        ref={fileInputRef}
        type="file"
        className="hidden"
      />
    </div>
  );
}
