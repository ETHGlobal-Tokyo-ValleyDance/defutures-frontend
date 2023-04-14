import home1 from "../../assets/home/home1.png";
import home2 from "../../assets/home/home2.png";
import home3 from "../../assets/home/home3.png";
import home4 from "../../assets/home/home4.png";
import home5 from "../../assets/home/home5.png";
import ether from "../../assets/home/ether.png";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex max-w-screen-lg mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-max">
          <h1 className="text-primary-500 text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
            Fully Decentralized <br />
            Futures Trading <br />
            in crypto
          </h1>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <button>
              Get started
              </button>
            </div>
          </div>
        </div>

        <img src={home1} />
      </div>

      <div>
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="flex">
              <img src={home2} />
              <div className="flex flex-col items-center justify-center ml-5">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-500 sm:text-4xl">
                  Meet our team
                </p>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <Profile img={home1} role={"FrontEnd Dev"} name={"홍길동"} />
              <Profile img={home1} role={"FrontEnd Dev"} name={"홍길동"} />
              <Profile img={home1} role={"FrontEnd Dev"} name={"홍길동"} />
            </div>
            <div className="flex mt-10 justify-around">
              <Profile img={home1} role={"FrontEnd Dev"} name={"홍길동"} />
              <Profile img={home1} role={"FrontEnd Dev"} name={"홍길동"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-10  items-center justify-center flex-col">
        <div className="text-primary-500 flex mt-14 items-center justify-center text-4xl font-bold mb-10">
          Market sentiments, portfolio,
          <br /> infrastructure of your cho
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">Invest Smart</h1>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>

          <div>
            <img src={home3} />
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <img src={home4} />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">Invest Smart</h1>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">Invest Smart</h1>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>

          <div>
            <img src={home5} />
          </div>
        </div>

        <div className="flex flex-row mt-[100px] mb-[100px] w-[700px] h-[216px] bg-primary-400  rounded-2xl">
          <div>
            <h1 className="mt-[36px] ml-[36px] text-2xl font-bold ">
              Start Mining MNow
            </h1>
            <p> ldsfasfasdfsd</p>
          </div>
          <div>
            <button className="mt-[100px] ml-[250px] w-[152px] h-[55px] bg-[#ffffff]">
              as
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src={ether} />
      </div>
    </main>
  );
};

export default Home;
