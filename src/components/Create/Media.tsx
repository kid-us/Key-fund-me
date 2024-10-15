import { useEffect, useRef, useState } from "react";
import BackButton from "../Button/BackButton";
import ContinueButton from "../Button/ContinueButton";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { getCroppedImg } from "../../services/cropUtils";
import Cropper from "react-easy-crop";
import CustomSlider from "./CustomSlider";
import { useFundStore } from "../../store/useCreateFund";
import useIncompleteFieldsAlert from "../../hooks/useAlert";

const Media = () => {
  const { fundraise, addToFund } = useFundStore();

  const navigate = useNavigate();

  const [loader, setLoader] = useState<boolean>(false);

  const alert = useIncompleteFieldsAlert("info");

  // Cropper
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [aspect, setAspect] = useState<number>();

  const [activeImg, setActiveImg] = useState<string>("");
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [otherCroppedImage, setOtherCroppedImage] = useState<string | null>(
    null
  );
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [otherImageFile, setOtherImgFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  // Utility function to convert base64 to File
  const base64ToFile = (base64String: string, fileName: string): File => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1]; // Extract MIME type
    const bstr = atob(arr[1]); // Decode base64 string
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  useEffect(() => {
    setCroppedImage(fundraise.main_image ? fundraise.main_image : "");
    setOtherCroppedImage(fundraise.other_image ? fundraise.other_image : "");

    //   To File
    fundraise.main_image &&
      setImgFile(base64ToFile(fundraise.main_image, "main_img"));

    fundraise.other_image &&
      setOtherImgFile(base64ToFile(fundraise.other_image, "other_image"));
  }, []);

  // Input Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // On File Change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (activeImg === "main") {
        setImgFile(file);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const result = reader.result as string;
          setImageSrc(result);
          // Create an Image object and set the aspect ratio
          const img = new Image();
          img.src = result;
          img.onload = () => {
            setAspect(img.width / img.height);
          };
        });
        reader.readAsDataURL(file);
      } else {
        console.log("Lorem");

        setOtherImgFile(file);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const result = reader.result as string;
          setImageSrc(result);
          // Create an Image object and set the aspect ratio
          const img = new Image();
          img.src = result;
          img.onload = () => {
            setAspect(img.width / img.height);
          };
        });
        reader.readAsDataURL(file);
      }
    }
  };

  // On crop complete
  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  // Showing Cropped Image
  const showCroppedImage = async () => {
    try {
      if (activeImg === "main") {
        const croppedImage = await getCroppedImg(
          imageSrc!,
          croppedAreaPixels,
          rotation
        );
        setCroppedImage(croppedImage as string);
        setImageSrc(null);
      } else {
        const croppedImage = await getCroppedImg(
          imageSrc!,
          croppedAreaPixels,
          rotation
        );
        setOtherCroppedImage(croppedImage as string);
        setImageSrc(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Convert image file to base64 and store it in localStorage, returning the base64 string
  const convertFileToBase64 = (file: File, type: string) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (type === "main") {
        addToFund({
          main_image: base64String,
        });
      } else {
        addToFund({
          other_image: base64String,
        });
      }
    };
    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
    };
  };

  // On Reset Image

  const handleRestImage = (name: string) => {
    // Main
    if (name === "main") {
      addToFund({
        main_image: "",
      });
      setCroppedImage(null);
      // setImageSrc(null);
      return;
    }

    // Other
    if (name === "other") {
      addToFund({
        other_image: "",
      });
      setOtherCroppedImage(null);
      // setImageSrc(null);
      return;
    }
  };

  // On Submit
  const handleSubmit = () => {
    if (!imgFile) {
      setError(true);
      return;
    }
    setError(false);

    imgFile && convertFileToBase64(imgFile, "main");
    otherImageFile && convertFileToBase64(otherImageFile, "other");

    setLoader(true);
    navigate("/create/verification");
  };

  return (
    <>
      {/* Alert */}
      {alert && <Alert link="/info" start={3} />}

      {/* Sidebar */}
      <Sidebar
        image="picture"
        title="Add a cover Photo"
        page={4}
        progress={64.6}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quis sequi provident, magnam illo ratione porro, nulla eius suscipit qui facilis. Nulla iure veritatis cupiditate atque quis modi necessitatibus."
      />

      {/* Wrapper */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl">Upload Images</p>
          <p className="mt-2 text-sm text-gray-600 mb-2">Main Image</p>

          {/* Main Image */}
          {croppedImage ? (
            <div className="relative">
              <div className="border border-black rounded overflow-hidden mt-5 shadow">
                <img
                  src={croppedImage}
                  alt="Image"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Close Btn */}
              <div className="absolute -top-0 right-1">
                <button
                  onClick={() => handleRestImage("main")}
                  className="bg-red-500 rounded text-xs px-2 py-1 text-white bi-x-lg"
                ></button>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-gray-100 border border-gray-300 w-full h-36 rounded-lg pb-3 ps-3 text-center shadow">
                <input
                  type="file"
                  id={`main-file`}
                  className="hidden"
                  onChange={onFileChange}
                  accept="image/*"
                  ref={inputRef}
                />
                <label
                  onClick={() => setActiveImg("main")}
                  htmlFor={`main-file`}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col py-10">
                    <i className="bi-image text-2xl"></i>
                    <span className="text-sm">Upload</span>
                  </div>
                </label>
              </div>
            </>
          )}
          {error && (
            <p className="text-xs text-red-500 mt-1">Main image is required</p>
          )}

          {/* Other Image */}
          {otherCroppedImage ? (
            <div className="relative w-[30%]">
              <div className="border border-black rounded overflow-hidden mt-5 shadow">
                <img
                  src={otherCroppedImage}
                  alt="Image"
                  className="w-full h-40 object-contain"
                />
              </div>
              {/* Close Btn */}
              <div className="absolute -top-3 right-0">
                <button
                  onClick={() => handleRestImage("other")}
                  className="bg-red-500 rounded text-xs px-2 py-1 text-white bi-x-lg"
                ></button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-sm mt-4 mb-1">Other Image</p>
              <div className="bg-gray-100 border border-gray-300 w-[30%] h-32 rounded-lg pb-3 ps-3 text-center shadow">
                <input
                  type="file"
                  id={`other-file`}
                  className="hidden"
                  onChange={onFileChange}
                  accept="image/*"
                  ref={inputRef}
                />
                <label
                  onClick={() => setActiveImg("other")}
                  htmlFor={`other-file`}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col py-10">
                    <i className="bi-image text-2xl"></i>
                    <span className="text-sm">Upload</span>
                  </div>
                </label>
              </div>
            </>
          )}

          <div className="flex justify-between mt-14 ">
            <BackButton link="/info" />
            <ContinueButton loader={loader} onClick={() => handleSubmit()} />
          </div>
        </div>
      </Wrapper>

      {/* Cropper Modal */}
      {imageSrc && (
        <>
          {/* Overlay */}
          <div className="w-full top-0 left-0 h-full fixed bg-neutral-800/70"></div>

          {/* Image Container */}
          <div
            className="lg:h-[400px] lg:w-[47.5%] h-[200px] w-[90%]"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Header */}
            <div className="absolute z-50 -top-12 p-3 flex justify-between gap-x-1 w-full bg-white rounded-t">
              <p>
                <span className="bi-image"></span> Upload Image
              </p>

              <button
                onClick={() => setImageSrc(null)}
                className="text-red-500"
              >
                Close
              </button>
            </div>

            {/* Cropper */}
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              rotation={rotation}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              cropShape="rect"
              showGrid={false}
              classes={{
                containerClassName:
                  "rounded-lg overflow-hidden border border-transparent",
              }}
            />

            {/* Rotate and Save button */}
            <div className="absolute z-50 -bottom-12 grid grid-cols-12 gap-x-1 w-full">
              <button
                onClick={() => setRotation((rotation + 90) % 360)}
                className=" col-span-2 text-white bi-arrow-repeat text-2xl btn-bg border rounded-l-lg"
              ></button>

              <div className="w-full col-span-8 bg-white px-2">
                <CustomSlider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={setZoom}
                />
              </div>
              <button
                onClick={() => showCroppedImage()}
                className="text-white col-span-2 btn-bg rounded-r-lg border"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Media;
