import { useState } from "react";
import Header from "../../layout/header/header";
import MultiRangeSlider from "../../components/MultiSlide";
import BarChartExample from "../../components/charts/bar-chart";
import ThreeDimChart from "../../components/charts/three-dim-chart";

const AnalyticsPage = () => {
  const [tab, setTab] = useState(1);

  return (
    // <div className="wrapper bg-background-style bg-no-repeat bg-left 1200:bg-contain px-[58px]">
    <div className="wrapper px-[20px]  relative overflow-hidden w-full ">
      {/* Background  */}
      <div className="content">
        <Header />
      </div>

      <div className="content min-h-[100vh80px] lg:min-h-[calc(100vh-100px)] 1300:max-h-[1200px] flex items-center flex-col justify-start">
        <div className="flex items-start justify-between 1300:flex-row flex-col h-full w-full py-[20px] 900:py-[40px] gap-[32px]">
          {/* Left  */}
          <div className="w-full flex flex-col gap-[40px]">
            {/* top */}
            <div className="w-full flex items-start 900:flex-row 900:gap-0 gap-[80px] flex-col-reverse justify-between">
              {/* Left  */}
              <div className="flex items-start font-red-rose justify-center gap-[20px] 900:gap-[20px] flex-col">
                <p className="text-[20px] font-[700] tooltip">
                  TYRE COMPOUND{" "}
                  <span className="tooltiptext">Type component</span>
                </p>
                <div className="flex items-center justify-start gap-[8px]">
                  {/* 1 */}
                  <button
                    onClick={() => setTab(0)}
                    className={`text-[14px] font-[400] font-red-rose px-[12px] py-[8px] ${
                      tab === 0 &&
                      "text-[#C00000] bg-[#EEECEC] rounded-[6px] font-[700]"
                    }`}
                  >
                    NEW
                  </button>
                  {/* 2 */}
                  <button
                    onClick={() => setTab(1)}
                    className={`text-[14px] font-[400] font-red-rose px-[12px] py-[8px] ${
                      tab === 1 &&
                      "text-[#C00000] bg-[#EEECEC] rounded-[6px] font-[700]"
                    }`}
                  >
                    SCRUBBED
                  </button>
                  {/* 3 */}
                  <button
                    onClick={() => setTab(2)}
                    className={`text-[14px] font-[400] font-red-rose px-[12px] py-[8px] ${
                      tab === 2 &&
                      "text-[#C00000] bg-[#EEECEC] rounded-[6px] font-[700]"
                    }`}
                  >
                    USED
                  </button>
                </div>
              </div>
              {/* Right  */}
              <div className="w-full max-w-[320px] font-red-rose flex flex-col gap-[25px] 900:gap-[15px]">
                <p className="text-[20px] font-[700] tooltip relative">
                  LAP NUMBER <span className="tooltiptext">Lap Number</span>
                </p>
                <div>
                  <MultiRangeSlider
                    min={0}
                    max={400}
                    onChange={({ min, max }: { min: number; max: number }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
              </div>
            </div>
            {/* bottom  */}
            <div className="w-full flex items-center justify-between gap-[24px] 1300:flex-row flex-col">
              <div className="all-center min-h-[340px]  w-full rounded-[8px] bg-[#161414] border-[1px] border-[#EEECEC] border-dashed flex flex-col items-start p-[16px]">
                <p className="font-[700] text-[16px] font-red-rose tooltip">
                  LAP NUMBER <span className="tooltiptext">Lap Number</span>
                </p>
                <p className="font-[400] text-[14px] leading-[1] font-red-rose mt-[6px]">
                  LAP TIME(s/lap)
                </p>
                <ThreeDimChart height={300} tab={tab} />
              </div>
              <div className="all-center min-h-[360px] w-full min-w-[300px] 1300:max-w-[336px] rounded-[8px] bg-[#161414] border-[1px] border-[#EEECEC] border-dashed flex-col gap-[20px] items-start p-[16px]">
                <p className="font-[700] text-[16px] font-red-rose tooltip">
                  STRATEGY <span className="tooltiptext">Strategy</span>
                </p>
                <p className="font-[400] text-[14px] leading-[1] font-red-rose mt-[6px]">
                  AMOUNT($)
                </p>
                <div className="w-full 1300:w-[300px] h-[260px]">
                  <BarChartExample width={300} height={260} />
                </div>
              </div>
            </div>
          </div>
          {/* Right  */}
          <div className="w-full 1300:max-w-[286px] bg-[#161414] rounded-[8px] p-[16px] col-center 1300:h-auto">
            {/* head  */}
            <h3 className="text-[20px] font-[700] font-red-rose w-full tooltip">
              RESULTS: <span className="tooltiptext">results</span>
            </h3>
            <div className="col-center gap-[16px] w-full mt-[12px]">
              {/* 1  */}
              <div className="w-full flex flex-col font-red-rose items-start gap-[12px]">
                <p className="font-[400] text-[14px]">Track Condition:</p>
                <h3 className="text-[20px] font-[700]">Dry</h3>
              </div>
              {/* Sepration  */}
              <div className="w-full border-t-[1px] border-[#595353] border-dashed"></div>
              {/* 2  */}
              <div className="w-full flex flex-col font-red-rose items-start gap-[12px]">
                <p className="font-[400] text-[14px]">
                  Tyre Degradation Rate (s/lap):
                </p>
                <h3 className="text-[20px] font-[700]">0.05</h3>
              </div>
              {/* Sepration  */}
              <div className="w-full border-t-[1px] border-[#595353] border-dashed"></div>
              {/* 1  */}
              <div className="w-full flex flex-col font-red-rose items-start gap-[12px]">
                <p className="font-[400] text-[14px]">
                  Average Pace / New Tyre (s/lap):
                </p>
                <h3 className="text-[20px] font-[700]">0.05</h3>
              </div>
              {/* Sepration  */}
              <div className="w-full border-t-[1px] border-[#595353] border-dashed"></div>
              {/* 1  */}
              <div className="w-full flex flex-col font-red-rose items-start gap-[12px]">
                <p className="font-[400] text-[14px]">
                  Average Pace / Scrubbed Tyre (s/lap):
                </p>
                <h3 className="text-[20px] font-[700]">0.05</h3>
              </div>
              {/* Sepration  */}
              <div className="w-full border-t-[1px] border-[#595353] border-dashed"></div>
              {/* 1  */}
              <div className="w-full flex flex-col font-red-rose items-start gap-[12px]">
                <p className="font-[400] text-[14px]">
                  Average Pace / Used Tyre (s/lap):
                </p>
                <h3 className="text-[20px] font-[700]">0.05</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
