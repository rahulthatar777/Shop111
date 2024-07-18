import HoneyProducts from "./honey-products";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[25px] pb-[70px] box-border max-w-full text-center text-19xl text-peru font-poppins mq750:pb-[45px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq750:gap-[39px]">
        <div className="w-[657px] flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-4xl mq1050:text-11xl">
                CHEF MATT PRODUCTS
              </h1>
              <div className="self-stretch h-1 relative bg-peru [transform:_rotate(-180deg)] z-[1]" />
            </div>
            <div className="relative text-lg text-white text-left">
              <p className="m-0">{`Shop Gourmet Chef Quality products from the Chef Matt brand. `}</p>
              <p className="m-0">Chef it yourself and Thank us later.</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-full text-lg mq750:gap-[19px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[14px] min-w-[211px] max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[78px] px-0 pb-0">
              <img
                className="w-[76px] h-[77px] relative w-[76px] h-[77px] relative"
                loading="lazy"
                alt=""
                src="/expand-left-double-light.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[152px]">
              <div className="w-[234px] h-[234px] relative rounded-[50%] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[-2px] [transform:scale(1.231)]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-5@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-9">
                <div className="flex-1 flex flex-col items-end justify-start gap-[5px]">
                  <div className="relative">CINNAMON HONEY</div>
                  <div className="flex flex-row items-start justify-end py-0 pr-8 pl-[33px] text-sm text-white">
                    <div className="w-[97px] relative inline-block min-w-[97px]">
                      <span>
                        <span className="[text-decoration:line-through]">
                          $12.00
                        </span>
                        {`  `}
                      </span>
                      <span className="text-base"> $9.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HoneyProducts
            ellipse6="/ellipse-6@2x.png"
            cOCONUTOIL="COCONUT OIL"
            prop="$20.00"
            prop1=" $15.00"
          />
          <HoneyProducts
            ellipse6="/ellipse-7@2x.png"
            cOCONUTOIL="MANGO HONEY"
            prop="$9.00"
            prop1=" $6.00"
            propWidth="unset"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[211px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
              <div className="h-[234px] w-[234px] relative rounded-[50%] flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[-2px] [transform:scale(1.231)]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-8@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[78px] px-0 pb-0">
                <img
                  className="w-[76px] h-[77px] relative"
                  loading="lazy"
                  alt=""
                  src="/expand-right-double-light.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[38px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative">HONEY HABANERO</div>
                <div className="flex flex-row items-start justify-start py-0 px-[31px] text-sm text-white">
                  <div className="w-[97px] relative font-poppins text-white text-center inline-block min-w-[97px] text-sm w-[97px] relative inline-block min-w-[97px]">
                    <span>
                      <span className="[text-decoration:line-through] [text-decoration:line-through]">
                        $12.00
                      </span>
                      {`  `}
                    </span>
                    <span className="text-base text-base"> $9.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
