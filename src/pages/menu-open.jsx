import GroupComponent from "../components/group-component";
import HeroContent from "../components/hero-content";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const MenuOpen = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[209.2px] box-border gap-[129px] leading-[normal] tracking-[normal] text-left text-19xl text-white font-poppins mq450:gap-[32px] mq750:gap-[64px]">
      <section className="w-full h-[1117px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[798px] left-[158px] w-[319px] h-[319px] object-contain"
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
        className="w-[447px] h-[299px] absolute !m-[0] right-[419px] bottom-[-46.8px] object-contain"
        loading="lazy"
        alt=""
        src="/chefmattrevwhitehighres12048x1365-2@2x.png"
      />
      <div className="w-[878px] h-[217px] relative hidden max-w-full z-[2]">
        <div className="absolute top-[0px] left-[0px] mq450:text-4xl mq1050:text-11xl">
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
      <section className="w-[1013px] flex flex-row items-end justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] text-center text-5xl text-white font-poppins mq750:flex-wrap">
        <GroupComponent />
        <div className="w-[359px] flex flex-col items-start justify-start pt-0 px-0 pb-[163px] box-border min-w-[359px] min-h-[239px] max-w-full mq450:min-w-full mq750:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full z-[2]">
            <div className="flex-1 box-border flex flex-row items-start justify-start py-[19px] px-0 max-w-full border-[3px] border-solid border-white">
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                <div className="flex-1 relative leading-[31px] inline-block [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] max-w-full mq450:text-lgi mq450:leading-[25px]">
                  Meet Chef Matt
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
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left text-19xl text-white font-poppins">
        <div className="w-[1302px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[98px] max-w-full mq450:gap-[24px] mq750:gap-[49px]">
          <HeroContent />
          <FrameComponent1 />
          <FrameComponent />
          <div className="w-[850px] flex flex-row items-start justify-start pt-0 px-[65px] pb-[88px] box-border max-w-full mq1050:pl-8 mq1050:pr-8 mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <div className="w-[572px] flex flex-col items-start justify-start gap-[1px] max-w-full">
                <div className="flex flex-row items-start justify-start relative max-w-full">
                  <img
                    className="h-[401px] w-[1282px] absolute !m-[0] right-[-660px] bottom-[-245px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-16@2x.png"
                  />
                  <h1 className="m-0 relative text-inherit font-normal font-inherit z-[5] mq450:text-4xl mq1050:text-11xl">
                    SIGN UP SPECIAL PROMOTIONS
                  </h1>
                </div>
                <div className="self-stretch h-1 relative bg-white [transform:_rotate(-180deg)] z-[5]" />
              </div>
              <div className="relative text-lg inline-block max-w-full">
                Get exclusive deals you won’t find anywhere else straight to
                your inbox!
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-xs text-[transparent] font-graphik">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[335px] max-w-full z-[5]">
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full z-[1]">
                    <div className="self-stretch bg-gray-300 box-border overflow-hidden flex flex-col items-center justify-start py-1.5 px-[7px] gap-[4px] max-w-full border-[1px] border-solid border-white">
                      <div className="w-[261px] hidden flex-col items-start justify-start py-0 pr-0 pl-7 box-border">
                        <div className="self-stretch h-3 relative leading-[100%] inline-block">
                          Label
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[4px] max-w-full z-[unset] text-sm text-white font-poppins">
                        <img
                          className="h-6 w-6 relative hidden min-h-[24px]"
                          alt=""
                          src="/help.svg"
                        />
                        <div className="flex-1 relative leading-[24px] inline-block max-w-full z-[unset]">
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
                <div className="w-[188px] flex flex-col items-start justify-start z-[5] text-dark-400">
                  <div className="self-stretch flex flex-col items-start justify-start z-[1]">
                    <div className="self-stretch bg-peru overflow-hidden flex flex-col items-center justify-start py-1.5 px-[7px] gap-[4px] z-[1] border-[1px] border-solid border-peru">
                      <div className="self-stretch hidden flex-col items-start justify-start py-0 pr-0 pl-7">
                        <div className="self-stretch h-3 relative leading-[100%] inline-block">
                          Label
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[4px] z-[unset] text-center text-sm text-white font-poppins">
                        <img
                          className="h-6 w-6 relative [transform:_rotate(180deg)] hidden min-h-[24px]"
                          alt=""
                          src="/help.svg"
                        />
                        <div className="flex-1 relative leading-[24px] z-[unset]">
                          Subscribe
                        </div>
                        <img
                          className="h-6 w-6 relative [transform:_rotate(180deg)] hidden min-h-[24px]"
                          alt=""
                          src="/dropdown.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default MenuOpen;
