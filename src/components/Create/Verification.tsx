import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useFundStore } from "../../store/useCreateFund";
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import useIncompleteFieldsAlert from "../../hooks/useAlert";
import Wrapper from "./Wrapper";
import BackButton from "../Button/BackButton";
import ContinueButton from "../Button/ContinueButton";

const Verification = () => {
  const navigate = useNavigate();

  const { fundraise, addToFund } = useFundStore();

  const [loader, setLoader] = useState<boolean>(false);

  //  Check if the previous form is filled
  const alert = useIncompleteFieldsAlert("media");

  const [govIDFile, setGovIDFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [govIDBase64, setGovIDBase64] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  // Display image if users select before.
  useEffect(() => {
    setGovIDBase64(
      fundraise.government_issue_id ? fundraise.government_issue_id : ""
    );
    setPhotoBase64(fundraise.photo ? fundraise.photo : "");

    //   To File
    fundraise.government_issue_id &&
      setGovIDFile(base64ToFile(fundraise.government_issue_id, "main_img"));

    fundraise.photo && setPhotoFile(base64ToFile(fundraise.photo, "photo"));
  }, [fundraise]);

  // Validate that the selected file is an image and its size is less than 1 MB
  const validateImage = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

    if (!validTypes.includes(file.type)) {
      setErrorMessage("Only JPEG or PNG files are allowed.");
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage("File size should be less than 1MB.");
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  // Handle file change for government-issued ID
  const handleGovIDChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateImage(file)) {
      setGovIDFile(file);
      const base64 = await convertFileToBase64(file);
      setGovIDBase64(base64); // Set the base64 to display the image
    }
  };

  // Handle file change for photo
  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateImage(file)) {
      setPhotoFile(file);
      const base64 = await convertFileToBase64(file);
      setPhotoBase64(base64); // Set the base64 to display the image
    }
  };

  // Convert the image file to base64 format
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (govIDFile && photoFile) {
      try {
        setLoader(true);

        // Convert both files to base64 and store them in localStorage
        const govIDBase64 = await convertFileToBase64(govIDFile);
        const photoBase64 = await convertFileToBase64(photoFile);

        // Store in localStorage
        addToFund({ government_issue_id: govIDBase64 });
        addToFund({ photo: photoBase64 });

        navigate("/create/bank-info"); // Change this route to the next step
      } catch (error) {
        console.error("Error converting file:", error);
        setErrorMessage("Error processing files.");
      } finally {
        setLoader(false);
      }
    } else {
      setErrorMessage("Please upload both government-issued ID and a photo.");
    }
  };

  return (
    <>
      {/* Alert */}
      {alert && <Alert link="/media" start={3} />}

      <Sidebar
        image="trust"
        title="Verification time."
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quis sequi provident, magnam illo ratione porro, nulla eius suscipit qui facilis. Nulla iure veritatis cupiditate atque quis modi necessitatibus."
      />

      {/* Fundraiser */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-6">Let's verify you</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="govID" className="block text-gray-600 text-sm mb-2">
              Government Issued ID:
            </label>
            {/* Display government ID image */}
            {govIDBase64 ? (
              <div className="relative lg:w-[400px]">
                <img
                  src={govIDBase64}
                  alt="Government Issued ID Preview"
                  style={{ maxWidth: "400px", marginTop: "10px" }}
                  className="border rounded-xl mb-5 h-48"
                />
                {/* Close btn */}
                <button
                  onClick={() => {
                    addToFund({
                      government_issue_id: "",
                    });
                    setGovIDBase64(null);
                    setGovIDFile(null);
                  }}
                  className="absolute top-0 lg:right-14 right-0 bg-red-500 rounded text-xs px-2 py-1 text-white bi-x-lg"
                ></button>
              </div>
            ) : (
              <div className="relative bg-gray-100 border border-gray-300 lg:w-[400px] h-36 rounded-lg pb-3 ps-3 text-center shadow">
                <input
                  type="file"
                  id="govID"
                  accept="image/*"
                  onChange={handleGovIDChange}
                  className="hidden"
                />
                <label htmlFor={`govID`} className="cursor-pointer">
                  <div className="flex flex-col py-10">
                    <i className="bi-image text-2xl"></i>
                    <span className="text-sm">Upload</span>
                  </div>
                </label>
              </div>
            )}

            {/* Photo */}
            <div className="mt-5">
              <label
                htmlFor="photo"
                className="block text-gray-600 text-sm mb-2"
              >
                Photo
              </label>
              {photoBase64 ? (
                <div className="relative w-[200px]">
                  <img
                    src={photoBase64}
                    alt="Photo"
                    style={{ maxWidth: "200px", marginTop: "10px" }}
                    className="border rounded-xl mb-10 h-36"
                  />
                  {/* Close btn */}
                  <button
                    onClick={() => {
                      addToFund({
                        photo: "",
                      });
                      setPhotoBase64(null);
                      setPhotoFile(null);
                    }}
                    className="absolute top-0 right-0 bg-red-500 rounded text-xs px-2 py-1 text-white bi-x-lg"
                  ></button>
                </div>
              ) : (
                <div className="relative bg-gray-100 border border-gray-300 w-[200px] h-36 rounded-lg pb-3 ps-3 text-center shadow">
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <label htmlFor={`photo`} className="cursor-pointer">
                    <div className="flex flex-col py-10">
                      <i className="bi-image text-2xl"></i>
                      <span className="text-sm">Upload</span>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {errorMessage && (
              <p style={{ color: "red" }} className="text-sm mt-3">
                {errorMessage}
              </p>
            )}

            <div className="flex justify-between mt-14 lg:gap-x-0 gap-x-3">
              <BackButton link="/media" />
              <ContinueButton loader={loader} onClick={() => handleSubmit} />
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Verification;
