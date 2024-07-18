import PrimarybtnPrimaryHover from "./primarybtn-primary-hover";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start py-0 pr-[447px] pl-[634px] box-border gap-[411px] max-w-full text-center text-5xl text-white font-poppins mq450:gap-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq1350:gap-[205px] mq1350:pl-[317px] mq1350:pr-[223px] mq1350:box-border mq800:gap-[103px] mq800:pl-[158px] mq800:pr-[111px] mq800:box-border ${className}`}
    >
      <div className="ml-[-710px] h-[900px] w-[299px] relative shrink-0 z-[2]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[76px] bg-gray-400 w-[150px] hidden" />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[76px] w-[223px]">
          <div className="absolute top-[0px] left-[158px] bg-peru w-[900px] h-2 [transform:_rotate(90deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[226px] left-[-76px] w-[299px] h-[447px] object-contain z-[1]"
            alt=""
            src="/chefmattrevwhitehighres12048x1365-11@2x.png"
          />
        </div>
        <img
          className="absolute top-[38px] left-[131px] w-10 h-10 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/menu--hamburger.svg"
        />
      </div>
      <div className="w-[359px] flex flex-col items-start justify-start pt-0 px-0 pb-[163px] box-border min-h-[239px] max-w-full shrink-0">
        <PrimarybtnPrimaryHover text="Meet Chef Matt" />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
