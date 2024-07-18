import PropTypes from "prop-types";

const ShippingGuarantee = ({
  className = "",
  vector,
  fREESHIPPINGWORLDWIDE,
  guaranteedDelivery,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-left text-5xl text-peru font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
        <img
          className="h-8 w-9 relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <div className="relative mq450:text-lgi">FREE SHIPPING WORLDWIDE</div>
          <div className="relative text-lg text-white">Guaranteed Delivery</div>
        </div>
      </div>
    </div>
  );
};

ShippingGuarantee.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  fREESHIPPINGWORLDWIDE: PropTypes.string,
  guaranteedDelivery: PropTypes.string,
};

export default ShippingGuarantee;
