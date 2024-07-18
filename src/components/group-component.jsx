import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[345px] flex flex-col items-start justify-start pt-10 px-0 pb-[26px] box-border gap-[50px] min-w-[345px] max-w-full z-[2] text-left text-3xl text-peru font-poppins mq450:gap-[25px] mq450:pt-5 mq450:box-border mq450:min-w-full mq750:flex-1 mq1050:pt-[26px] mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <div className="self-stretch h-[900px] relative bg-gray-200 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-[49px] pb-[185px] box-border relative bg-[url('/public/chefmattrevwhitehighres12048x1365-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
          <img
            className="h-[221px] w-[330px] relative object-cover hidden max-w-full z-[0]"
            alt=""
            src="/chefmattrevwhitehighres12048x1365-1@2x.png"
          />
          <img
            className="h-9 w-9 relative z-[2]"
            loading="lazy"
            alt=""
            src="/close-round.svg"
          />
          <a className="[text-decoration:none] absolute !m-[0] bottom-[-24px] left-[26px] text-[inherit] inline-block min-w-[63px] z-[2] mq450:text-lg">
            HOME
          </a>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[34px] pb-[209px] mq450:pb-[136px] mq450:box-border">
        <nav className="m-0 flex flex-col items-start justify-start gap-[26px] text-left text-3xl text-white font-poppins">
          <div className="relative inline-block min-w-[116px] z-[1] mq450:text-lg">
            PRODUCTS
          </div>
          <div className="relative z-[1] mq450:text-lg">MEET CHEF MATT</div>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[44px] z-[1] mq450:text-lg">
            FAQ
          </a>
          <div className="relative z-[1] mq450:text-lg">CONNECT WITH US</div>
        </nav>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17.5px] text-base text-white">
        <div className="flex flex-row items-start justify-start py-0 pr-7 pl-[34px]">
          <div className="relative z-[1]">
            <span className="whitespace-pre-wrap">{`TEXT SUPPORT 24/7   `}</span>
            <span className="[text-decoration:underline] text-peru">
              070-7782-9137
            </span>
          </div>
        </div>
        <div className="self-stretch h-0.5 relative bg-white [transform:_rotate(-180deg)] z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[39px] pl-[34px] text-3xl">
          <div className="flex-1 flex flex-row items-start justify-start gap-[42px] mq450:gap-[21px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-[29px] w-[29px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/bag-alt.svg"
              />
              <div className="relative inline-block min-w-[58px] z-[1] mq450:text-lg">
                CART
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-7 h-7 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/favorite.svg"
                />
              </div>
              <div className="relative inline-block min-w-[95px] z-[1] mq450:text-lg">
                WISHLIST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
