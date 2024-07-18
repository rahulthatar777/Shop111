import ProductsHeader from "./products-header";
import PrimarybtnPrimaryHover from "./primarybtn-primary-hover";
import PropTypes from "prop-types";

const ProductsContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1302px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[69px] max-w-full text-center text-19xl text-peru font-poppins mq450:gap-[17px] mq800:gap-[34px] ${className}`}
    >
      <ProductsHeader />
      <div className="w-[876px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-gray-100">
        <img
          className="h-[401px] w-[1282px] absolute !m-[0] right-[-406px] bottom-[-331px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-161@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[163px] box-border max-w-full mq800:pb-[106px] mq800:box-border">
          <div className="w-[455px] flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border relative gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h1 className="m-0 relative text-inherit font-normal font-inherit z-[2] mq450:text-4xl mq800:text-11xl">
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
                      src="/group-3.svg"
                    />
                  </div>
                  <div className="relative z-[2] mq450:text-lg">
                    <p className="m-0 font-light">
                      GET 20% OFF YOUR ORDER OF $50 OR MORE
                    </p>
                    <p className="m-0">
                      <span className="font-light">{`Use code `}</span>
                      <span className="font-extrabold font-poppins">
                        “Chef20”
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49px] pl-[47px] box-border max-w-full mq450:pl-[23px] mq450:pr-6 mq450:box-border">
                <PrimarybtnPrimaryHover
                  text="Shop Now"
                  propAlignSelf="unset"
                  propFlex="1"
                />
              </div>
            </div>
            <img
              className="w-[78px] h-3 absolute !m-[0] right-[188px] bottom-[0px] z-[2]"
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[850px] flex flex-row items-start justify-start pt-0 px-[65px] pb-[77px] box-border max-w-full text-left text-white mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full mq800:gap-[15px]">
          <div className="w-[572px] flex flex-col items-start justify-start gap-[1px] max-w-full">
            <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq800:text-11xl">
              SIGN UP SPECIAL PROMOTIONS
            </h1>
            <div className="self-stretch h-1 relative bg-white [transform:_rotate(-180deg)] z-[1]" />
          </div>
          <div className="relative text-lg inline-block max-w-full z-[1]">
            Get exclusive deals you won’t find anywhere else straight to your
            inbox!
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-xs text-[transparent] font-graphik">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[335px] max-w-full z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-gray-300 box-border overflow-hidden flex flex-col items-center justify-start py-1.5 px-[7px] gap-[4px] max-w-full border-[1px] border-solid border-white">
                  <div className="w-[261px] hidden flex-col items-start justify-start py-0 pr-0 pl-7 box-border">
                    <div className="self-stretch h-3 relative leading-[100%] inline-block">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px] max-w-full text-sm text-white font-poppins">
                    <img
                      className="h-6 w-6 relative hidden min-h-[24px]"
                      alt=""
                      src="/help.svg"
                    />
                    <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                      Enter email address
                    </div>
                    <img
                      className="h-6 w-6 relative hidden"
                      alt=""
                      src="/dropdown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[188px] flex flex-col items-start justify-start z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-peru overflow-hidden flex flex-col items-center justify-start py-1.5 px-[7px] gap-[4px] border-[1px] border-solid border-peru">
                  <div className="self-stretch hidden flex-col items-start justify-start py-0 pr-0 pl-7">
                    <div className="self-stretch h-3 relative text-xs leading-[100%] font-graphik text-[transparent] text-left inline-block">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                    <img
                      className="h-6 w-6 relative hidden min-h-[24px]"
                      alt=""
                      src="/help.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[24px] font-poppins text-white text-center">
                      Subscribe
                    </div>
                    <img
                      className="h-6 w-6 relative hidden min-h-[24px]"
                      alt=""
                      src="/dropdown.svg"
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[57px] pl-14 box-border max-w-full text-left text-5xl mq1350:pl-7 mq1350:pr-7 mq1350:box-border">
        <div className="flex flex-row items-start justify-start gap-[74px] max-w-full mq1350:flex-wrap mq1350:gap-[37px] mq800:gap-[18px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
              <img
                className="h-8 w-9 relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative mq450:text-lgi">
                  FREE SHIPPING WORLDWIDE
                </div>
                <div className="relative text-lg text-white">
                  Guaranteed Delivery
                </div>
              </div>
            </div>
          </div>
          <div className="w-[347px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
              <img
                className="h-[30px] w-[31px] relative"
                loading="lazy"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="relative mq450:text-lgi">
                24/7 CUSTOMER SERVICE
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[22px] text-lg text-white">
              <div className="relative">Text Us 24/7 at 070-7782-9137</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
              <img
                className="h-9 w-9 relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative mq450:text-lgi">
                  QUALITY GUARANTEE!
                </div>
                <div className="relative text-lg text-white">
                  Send Within 30 Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-2 relative bg-peru [transform:_rotate(-180deg)] z-[1]" />
    </div>
  );
};

ProductsContent.propTypes = {
  className: PropTypes.string,
};

export default ProductsContent;
