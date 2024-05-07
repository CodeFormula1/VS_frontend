import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    // <div className="wrapper bg-background-style bg-no-repeat bg-left 1200:bg-contain px-[58px]">
    <div className="wrapper px-[20px] relative overflow-hidden">
      {/* Background  */}
      <img
        src="/background.png"
        className="w-auto min-w-[1200px] min-[2500px]:hidden sm:min-w-0 sm:object-cover 1400:object-contain h-full absolute top-0 left-[-60px] sm:left-0 z-[-1] lg:opacity-[1] opacity-30"
        alt=""
      />
      <div className="content min-h-[600px] h-[100vh] flex items-center justify-between">
        {/* Left  */}
        <div className="w-full lg:flex hidden min-[2500px]:hidden"></div>
        {/* Right  */}
        <div className="col-center w-full pt-[50px] lg:pt-[118px]">
          <img
            src="/vs-logo.png"
            className="w-full max-w-[200px] sm:max-w-[245px]"
            alt=""
          />
          <div className="w-full h-[1px] bg-[#595353] mt-[47px] max-w-[555px]"></div>
          <p className="font-red-rose text-[23px] font-[400] leading-[28px] text-[#EEECEC] mt-[25px]">
            Powered by:
          </p>
          <div className="flex items-center justify-center w-full gap-[8px] mt-[20px]">
            <img src="/l-pic.svg" className="w-full max-w-[135px]" alt="" />
            <div className="w-[1px] bg-[#FFFFFF] h-[48px]"></div>
            <img src="/r-pic.svg" className="w-full max-w-[150px]" alt="" />
          </div>
          <Link
            to={"/upload"}
            className="w-full all-center mt-[50px] sm:mt-[70px]"
          >
            <button className="uppercase bg-[#C00000] px-[55px] py-[16px] font-[700] text-[18px] rounded-[8px] font-red-rose">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
