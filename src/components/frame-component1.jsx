import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1259px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-19xl text-gray-100 font-poppins ${className}`}
    >
      <div className="w-[455px] flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border relative gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <h1 className="m-0 relative text-inherit font-normal font-inherit z-[2] mq450:text-4xl mq1050:text-11xl">
            ONLINE ONLY
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-3xl mq450:gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <div className="h-1 w-[78px] relative bg-gray-100 [transform:_rotate(-180deg)] z-[2]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <div className="w-[1282px] !m-[0] absolute right-[-426px] bottom-[-177px] bg-white flex flex-row items-start justify-start pt-[39px] px-6 pb-0 box-border">
                <div className="h-[383px] w-[1282px] relative bg-white hidden max-w-full" />
                <img
                  className="h-[344px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src="/rectangle-7@2x.png"
                />
              </div>
              <div className="relative z-[2] mq450:text-lg">
                <p className="m-0 font-light">
                  GET 20% OFF YOUR ORDER OF $50 OR MORE
                </p>
                <p className="m-0">
                  <span className="font-light">{`Use code `}</span>
                  <span className="font-extrabold font-poppins">“Chef20”</span>
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49px] pl-[47px] box-border max-w-full text-5xl mq450:pl-[23px] mq450:pr-6 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start max-w-full z-[2]">
              <div className="flex-1 box-border flex flex-row items-start justify-start py-[19px] px-0 max-w-full border-[3px] border-solid border-gray-100">
                <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <div className="flex-1 relative leading-[31px] inline-block [text-shadow:0.3px_0_0_#130f0c,_0_0.3px_0_#130f0c,_-0.3px_0_0_#130f0c,_0_-0.3px_0_#130f0c] max-w-full mq450:text-lgi mq450:leading-[25px]">
                    Shop Now
                  </div>
                </div>
                <div className="overflow-hidden hidden flex-row items-center justify-start py-3.5 px-2">
                  <img className="h-3 w-3 relative" alt="" src="/wrapper.svg" />
                </div>
                <div className="overflow-hidden hidden flex-row items-center justify-start py-3.5 px-2">
                  <img className="h-3 w-3 relative" alt="" src="/wrapper.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[78px] h-3 absolute !m-[0] right-[188px] bottom-[0px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-3.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
