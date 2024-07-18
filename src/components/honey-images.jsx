import { useMemo } from "react";
import PropTypes from "prop-types";

const HoneyImages = ({
  className = "",
  ellipse6,
  cOCONUTOIL,
  prop,
  prop1,
  propWidth,
}) => {
  const honeyImagesStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`h-[314px] w-[235px] flex flex-col items-start justify-start gap-[24px] text-center text-lg text-peru font-poppins ${className}`}
      style={honeyImagesStyle}
    >
      <div className="w-[235px] h-[234px] relative rounded-[50%] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[-2px] [transform:scale(1.231)]"
          loading="lazy"
          alt=""
          src={ellipse6}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[57px] pl-14">
        <div className="flex-1 flex flex-col items-end justify-start gap-[5px]">
          <div className="relative inline-block min-w-[122px]">
            {cOCONUTOIL}
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 text-sm text-white">
            <div className="flex-1 relative">
              <span className="whitespace-pre-wrap">
                <span className="[text-decoration:line-through]">{prop}</span>
              </span>
              <span className="whitespace-pre-wrap">{`  `}</span>
              <span className="text-base">{prop1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HoneyImages.propTypes = {
  className: PropTypes.string,
  ellipse6: PropTypes.string,
  cOCONUTOIL: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default HoneyImages;
