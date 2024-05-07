import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-[80px] lg:h-[100px] wrapper w-full border-b-[1px] border-[#EEECEC]">
        <div className="content flex items-center justify-between">
          {/* Left  */}
          <div className="flex items-center justify-start gap-[10px] md:gap-[16px]">
            <Link
              to={pathname === "/analytics" ? "/upload" : "/"}
              className={`size-[35px] lg:size-[48px]  all-center rounded-[8px] ${
                pathname === "/analytics" ? "bg-[#C00000]" : "bg-[#FFFFFF]"
              }`}
            >
              {pathname === "/analytics" ? (
                <img
                  src="/left-arr.png"
                  className="w-full max-w-[20px] lg:max-w-[24px]"
                  alt=""
                />
              ) : (
                <img
                  src="/left.svg"
                  className="w-full max-w-[20px] lg:max-w-[24px]"
                  alt=""
                />
              )}
            </Link>
            <div className="flex items-center gap-[8px] md:gap-[10px]">
              <h3
                className={`font-red-rose font-[700] leading-[1] text-[18px] md:text-[20px] lg:text-[24px] ${
                  pathname === "/analytics" ? "text-[#C00000]" : ""
                }`}
              >
                ANALYTICS
              </h3>
              {pathname === "/analytics" && (
                <>
                  <div className="w-[2px] h-[20px] md:h-[22px] bg-[white]"></div>
                  <p className="text-[11px] md:text-[16px] font-[700]">
                    STINT ANALYTICS
                  </p>
                </>
              )}
            </div>
          </div>
          {/* Right  */}
          <div className="flex items-center">
            <div
              onClick={() => setOpen(true)}
              className="lg:hidden cursor-pointer"
            >
              <IoMenu size={35} />
            </div>

            <div className="hidden lg:flex items-center justify-center w-full gap-[8px] mt-[15px]">
              <img
                src="/l-pic.svg"
                className="w-[125px] max-w-[125px]"
                alt=""
              />
              <div className="w-[1px] bg-[#FFFFFF] h-[40px]"></div>
              <img
                src="/r-pic.svg"
                className="w-[140px] max-w-[140px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-[20px] top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#000000] py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-[#FFFFFF]">
                          {/* CF-1 */}
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-[35px] flex-1 px-4 sm:px-6 col-center">
                        <div className=" flex items-center justify-center w-full gap-[8px] mt-[15px]">
                          <img
                            src="/l-pic.svg"
                            className="w-full max-w-[100px]"
                            alt=""
                          />
                          <div className="w-[1px] bg-[#FFFFFF] h-[36px]"></div>
                          <img
                            src="/r-pic.svg"
                            className="w-full max-w-[120px]"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
