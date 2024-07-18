import { useMemo } from "react";
import PropTypes from "prop-types";

const PrimarybtnPrimaryHover = ({
  className = "",
  text,
  propAlignSelf,
  propFlex,
}) => {
  const primarybtnPrimaryHoverStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start shrink-0 max-w-full z-[2] text-center text-5xl text-white font-poppins ${className}`}
      style={primarybtnPrimaryHoverStyle}
    >
      <div className="flex-1 box-border flex flex-row items-start justify-start py-[19px] px-0 max-w-full border-[3px] border-solid border-white">
        <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="flex-1 relative leading-[31px] inline-block [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] max-w-full mq450:text-lgi mq450:leading-[25px]">
            {text}
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
  );
};

PrimarybtnPrimaryHover.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default PrimarybtnPrimaryHover;
