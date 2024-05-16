import { useState } from "react";

function App() {
  return (
    <main className="flex flex-col sm:mt-14 mt-[26px] ">
      <div className="sm:m-auto  m-[16px] sm:w-[1110px]  ">
        <div className="flex justify-between">
          <img src="./W.svg"></img>
          <nav className="sm:flex hidden gap-[40px]  text-[#5E607A] text-[15px] leading-[26px]">
            <button className="hover:text-[#F15D51]">Home</button>
            <button className="hover:text-[#F15D51]">New</button>
            <button className="hover:text-[#F15D51]">Popular</button>
            <button className="hover:text-[#F15D51]">Trending</button>
            <button className="hover:text-[#F15D51]">Categories</button>
          </nav>
        </div>
        <section className=" sm:w-[1110px] sm:h-[511px] mt-[55.1px] flex sm:flex-row flex-col sm:gap-[30px] gap-[64px] ">
          <div>
            <img
              className="sm:w-[730px] h-[300px] object-cover "
              src="./mainImage.svg"
            ></img>
            <div className="flex sm:flex-row flex-col gap-[30px] sm:w-[730px] sm:h-[183px] mt-[28px] ">
              <div className="sm:w-[350px] ">
                <h1 className="sm:text-[56px] text-[40px] sm:leading-[56px] leading-[40px] font-extrabold">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="sm:w-[350px] ">
                <p className="pb-[29px]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="w-[185px] h-[48px] bg-[#F15D51] hover:bg-[#00001A] text-[#FFFDFA]">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="sm:w-[350px] sm:h-[511px] bg-[#00001A] px-[24px] pt-[32px]">
            <h1 className="text-[#E9AA52] text-[40px] font-bold leading-[40px] mb-[34px] ">
              New
            </h1>
            <div>
              <h2 className="text-[#FFFDFA] hover:text-[#E9AA52] cursor-pointer text-[20px] leading-[24px] font-extrabold pb-[8px]">
                Hydrogen VS Electric Cars
              </h2>
              <p className="text-[#C5C6CE] text-[15px] leading-[26px] pb-[29px]">
                Will Hydrogen-fuled cars ever catch up to EV's?
              </p>
            </div>
            <div className="h-px bg-[#5E607A] mb-[31px]"></div>
            <div>
              <h2 className="text-[#FFFDFA] hover:text-[#E9AA52] cursor-pointer text-[20px] leading-[24px] font-extrabold pb-[8px]">
                The Downsides of AI Artistry
              </h2>
              <p className="text-[#C5C6CE]  text-[15px] leading-[26px] pb-[29px]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="h-px bg-[#5E607A] mb-[31px]"></div>
            <div>
              <h2 className="text-[#FFFDFA] hover:text-[#E9AA52] cursor-pointer text-[20px] leading-[24px] font-extrabold pb-[8px]">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-[#C5C6CE] text-[15px] leading-[26px] pb-[29px]">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </section>
        <section className="flex sm:flex-row flex-col justify-between gap-[30px] sm:w-[1110px] sm:h-[129px] sm:my-[71px] my-[64px] ">
          <div className="flex gap-[24px] sm:w-[350px] ">
            <img src="./topic1.svg"></img>
            <div>
              <h1 className="text-[32px] text-[#C5C6CE] font-bold leading-[32px] mb-[12px]">
                01
              </h1>
              <h2 className="font-extrabold text-[18px] leading-[24px] hover:text-[#F15D51] cursor-pointer">
                Top 10 Laptops of 2024
              </h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex gap-[24px] sm:w-[350px] ">
            <img src="./topic2.svg"></img>
            <div>
              <h1 className="text-[32px] text-[#C5C6CE] font-bold leading-[32px] mb-[12px]">
                02
              </h1>
              <h2 className="font-extrabold text-[18px] leading-[24px] hover:text-[#F15D51] cursor-pointer">
                Reviving Retro PCs
              </h2>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex gap-[24px] sm:w-[350px]  ">
            <img src="./topic3.svg"></img>
            <div>
              <h1 className="text-[32px] text-[#C5C6CE] font-bold leading-[32px] mb-[12px]">
                03
              </h1>
              <h2 className="font-extrabold text-[18px] leading-[24px] hover:text-[#F15D51] cursor-pointer">
                The Growth of Gaming
              </h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
