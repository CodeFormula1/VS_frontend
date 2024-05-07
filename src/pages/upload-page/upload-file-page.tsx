import { useState } from "react";
import Header from "../../layout/header/header";
import { Link } from "react-router-dom";

const UploadFilePage = () => {
  const [uploading, setUploading] = useState(false);
  const [selection, setSelection] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const handleFilesSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles: File[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        newFiles.push(selectedFiles[i]);
      }
      setFiles(newFiles);
    }
    setTimeout(() => {
      setSelection((prev) => !prev);
    }, 3000);
  };

  console.log({ files });
  return (
    // <div className="wrapper bg-background-style bg-no-repeat bg-left 1200:bg-contain px-[58px]">
    <div className="wrapper px-[20px]  relative overflow-hidden w-full ">
      {/* Background  */}
      <img
        src="/background.png"
        className="w-auto min-w-[1200px] sm:min-w-0 min-[2500px]:hidden sm:object-cover 1400:object-contain h-full absolute top-0 left-[-0px] sm:left-0 z-[-1] lg:opacity-[1] opacity-30"
        alt=""
      />
      <div className="content min-h-[700px] h-[100vh] max-h-[1180px] flex items-center flex-col justify-center">
        <Header />
        <div className="flex items-center justify-center lg:justify-between h-full w-full pb-[35px]">
          {/* Left  */}
          <div className="w-full lg:flex hidden"></div>
          {/* Right  */}
          <div className="col-center w-full max-w-[528px] rounded-[12px] border-[1px] border-[#EEECEC] border-dashed bg-[#161414] overflow-hidden">
            <div className="w-full h-full rounded-[12px] all-center">
              {/* Content  */}
              {uploading ? (
                <>
                  {selection ? (
                    <div className="w-full col-center py-[20px] md:py-[40px] sm:px-[40px] px-[20px]">
                      <h3 className="text-[22px] sm:text-[25px] font-red-rose font-[700] text-center w-full">
                        SELECT
                      </h3>
                      <div className="mt-[40px] w-full flex items-center justify-center gap-[5px] sm:gap-[24px]">
                        <Link
                          to={"/analytics"}
                          className="bg-[#5C5959] w-full text-[14px] sm:text-[19px] font-[700] font-red-rose h-[48px] rounded-[8px] uppercase all-center"
                        >
                          StINT ANALYTICS
                        </Link>
                        <Link
                          to={"#"}
                          className="bg-[#5C5959] w-full text-[14px] sm:text-[19px] font-[700] font-red-rose h-[48px] rounded-[8px] uppercase all-center"
                        >
                          Strategy
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full col-center max-w-[448px] py-[20px] md:py-[40px] sm:px-0 px-[20px]">
                      <h3 className="text-[19px] sm:text-[22px] font-red-rose font-[700] text-center w-full">
                        UPLOADING FILES:
                      </h3>
                      <div className="mt-[40px] w-full flex flex-col gap-[20px]">
                        {/* 1  */}
                        {files?.length > 0 &&
                          files?.map((file: File, index: number) => (
                            <SingleFileUpload key={index} file={file} />
                          ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full col-center max-w-[325px] py-[20px] md:py-[30px] sm:px-0 px-[20px]">
                  <div className="w-full col-center">
                    <img
                      src="/bytesize_upload.svg"
                      className="w-[70px] max-w-[70px]"
                      alt=""
                    />
                    <p className="text-[24px] font-[700] leading-[1.3] font-red-rose mt-[16px]">
                      Upload Files
                    </p>
                    <p className="text-[14px] text-center font-[400] font-red-rose mt-[4px]">
                      Files should be in csv format & should be less than 5MB.
                    </p>
                    <label htmlFor="file-input" className="all-center">
                      <div className="py-[13px] px-[17px] font-[700] font-red-rose bg-[#C00000] rounded-[8px] text-[18px] mt-[25px] cursor-pointer">
                        SELECT FILE
                      </div>
                      {/* inpuT  */}
                      <input
                        type="file"
                        name=""
                        onChange={handleFilesSelection}
                        id="file-input"
                        multiple
                        className="sr-only"
                        // accept=".csv"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFilePage;

const SingleFileUpload = ({ file }: { file: File }) => {
  const [progress, setProgress] = useState(0);
  setInterval(() => {
    setProgress((prev) => (prev === 100 ? prev : prev + 10));
  }, 500);
  return (
    <div className="w-full flex items-center justify-center gap-[15px] m:gap-[24px]">
      <img src="/file-csv.svg" className="w-full max-w-[40px]" alt="" />
      <div className="w-full flex flex-col gap-[5px]">
        <p className="leading-[1] text-[14px] font-[400] font-red-rose uppercase">
          {file?.name.slice(0, 50)}
        </p>
        <div className="w-full flex items-center justify-between gap-[12px]">
          {/* Progress  */}
          <div className={`w-full h-[8px] bg-[#3F3A3A] relative rounded-[4px]`}>
            {/* Progress Completed  */}
            <div
              style={{
                width: `${progress}%`,
              }}
              className={`h-full bg-[#C00000] rounded-[4px]`}
            ></div>
          </div>
          <div className="text-[14px] font-[400] font-red-rose w-full max-w-[30px] leading-[1]">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};
