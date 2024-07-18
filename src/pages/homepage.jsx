import FrameComponent2 from "../components/frame-component2";
import ProductsContent from "../components/products-content";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[219px] box-border gap-[129px] leading-[normal] tracking-[normal] text-left text-19xl text-white font-poppins mq450:gap-[32px] mq800:gap-[64px]">
      <section className="w-full h-[1117px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[798px] left-[158px] w-[319px] h-[319px] object-contain"
          loading="lazy"
          alt=""
          src="/pngtreefive-thai-sweet-basil-leaves-4231023-1@2x.png"
        />
        <img
          className="absolute top-[-59px] left-[0px] w-[1440px] h-[959px] object-cover z-[1]"
          alt=""
          src="/slide4-image-1@2x.png"
        />
        <img
          className="absolute top-[859px] left-[775px] w-[78px] h-3 z-[2]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </section>
      <img
        className="w-[447px] h-[299px] absolute !m-[0] right-[418px] bottom-[-37px] object-contain"
        alt=""
        src="/chefmattrevwhitehighres12048x1365-21@2x.png"
      />
      <div className="w-[878px] h-[217px] relative hidden max-w-full z-[2]">
        <div className="absolute top-[0px] left-[0px] mq450:text-4xl mq800:text-11xl">
          SIGN UP SPECIAL PROMOTIONS
        </div>
        <div className="absolute top-[93px] left-[0px] text-lg">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </div>
        <div className="absolute top-[159px] left-[0px] w-[591px] flex flex-col items-start justify-start max-w-full text-sm">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch bg-gray-300 box-border overflow-hidden flex flex-col items-center justify-start py-1.5 px-[7px] max-w-full border-[1px] border-solid border-white">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="h-[41px] flex-1 relative leading-[24px] flex items-center max-w-full">
                  Enter your email address
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[159px] left-[604px] bg-peru w-[274px] flex flex-col items-start justify-start text-center text-3xl">
          <div className="self-stretch h-[58px] relative">
            <div className="absolute w-full top-[calc(50%_-_14.5px)] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 px-4 box-border">
              <div className="self-stretch relative leading-[128%] [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] mq450:text-lg mq450:leading-[23px]">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[62px] left-[572px] bg-white w-[572px] h-1 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      </div>
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <ProductsContent />
      </section>
    </div>
  );
};

export default Homepage;
