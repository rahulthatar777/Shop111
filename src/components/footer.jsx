import ShippingGuarantee from "./shipping-guarantee";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start gap-[69px] max-w-full text-left text-5xl text-peru font-poppins mq450:gap-[17px] mq750:gap-[34px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[57px] pl-14 box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[74px] max-w-full lg:flex-wrap lg:gap-[37px] mq750:gap-[18px]">
          <ShippingGuarantee
            vector="/vector.svg"
            fREESHIPPINGWORLDWIDE="QUALITY GUARANTEE!"
            guaranteedDelivery="Send Within 30 Days"
          />
          <div className="w-[347px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
              <img
                className="h-[30px] w-[31px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <div className="relative z-[1] mq450:text-lgi">
                24/7 CUSTOMER SERVICE
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[22px] text-lg text-white">
              <div className="relative z-[1]">
                Text Us 24/7 at 070-7782-9137
              </div>
            </div>
          </div>
          <ShippingGuarantee
            vector="/vector-2.svg"
            fREESHIPPINGWORLDWIDE="QUALITY GUARANTEE!"
            guaranteedDelivery="Label"
          />
        </div>
      </div>
      <div className="self-stretch h-2 relative bg-peru [transform:_rotate(-180deg)] z-[1]" />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
