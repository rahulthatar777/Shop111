import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] text-left text-base text-gray-100 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start min-w-[417px] max-w-full mq750:min-w-full">
        <div className="self-stretch bg-white flex flex-row items-start justify-start pt-[41.8px] px-[31px] pb-[41.7px] box-border relative max-w-full shrink-0">
          <div className="h-[229.9px] w-[641px] relative bg-white hidden max-w-full" />
          <div className="h-full w-[330.5px] absolute !m-[0] top-[0px] right-[27.8px] bottom-[0px] bg-[url('/public/image-banner-1-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/image-banner-1-1@2x.png"
            />
            <div className="absolute top-[73.7px] left-[0px] bg-white w-[152.3px] h-[123.4px]" />
          </div>
          <div className="w-[339.4px] flex flex-col items-start justify-start pt-[74.7px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative">
              <p className="m-0">Join Chef Matt’s Monthly Subscription</p>
              <p className="m-0">and bring world class chef quality</p>
              <p className="m-0">meals to your home.</p>
            </div>
          </div>
          <h1 className="m-0 w-[403px] relative text-19xl font-normal font-inherit inline-block shrink-0 [text-shadow:1px_0_0_#130f0c,_0_1px_0_#130f0c,_-1px_0_0_#130f0c,_0_-1px_0_#130f0c] max-w-full ml-[-339.3px] mq450:text-4xl mq1050:text-11xl">{`SUBSCRIBE & SAVE`}</h1>
        </div>
        <img
          className="self-stretch h-[230px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2] mt-[-0.1px]"
          loading="lazy"
          alt=""
          src="/rectangle-13@2x.png"
        />
      </div>
      <div className="h-[459.8px] flex-1 relative min-w-[417px] max-w-full mq750:min-w-full">
        <img
          className="absolute top-[229.8px] left-[0px] w-[641px] h-[230px] object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[641px] h-[229.9px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
