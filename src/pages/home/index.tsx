import home1 from "../../assets/home/home1.png";
import home2 from "../../assets/home/home2.png";
import home3 from "../../assets/home/home3.png";
import home4 from "../../assets/home/home4.png";
import home5 from "../../assets/home/home5.png";
import ether from "../../assets/home/ether.png";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { SiHiveBlockchain } from "react-icons/si";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex justify-center max-w-screen-lg mx-auto py-20 px-4 sm:px-6 lg:px-8">
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
              <Link to="/future">
                <button className="btn-lg btn-primary">Get started</button>
              </Link>
            </div>
          </div>
        </div>

        <img src={home1} />
      </div>

      <div className="flex w-full p-10 bg-primary-100 justify-center items-center flex-col">
        <h1 className="text-primary-500 text-5xl mb-20 leading-9 font-extrabold  sm:leading-10">
          Problem
        </h1>
        <h1 className="text-gray-500 text-xl mb-20 leading-9 font-extrabold sm:text-4xl sm:leading-10">
          현재 선물시장의 문제점
        </h1>
        <div className="flex flex-row ">
          <div className="flex items-center flex-col m-16">
            <AiFillCloseCircle className="text-primary-500 text-5xl mb-3" />
            <h2 className="text-primary-700">problem1</h2>
            <p className="text-primary-900 w-28">
              DEX에 투자하여 수익을 얻기 위해서는 2개 이상의 토큰을 예치해야
              한다.
            </p>
          </div>
          <div className="flex  items-center flex-col m-16">
            <CgDanger className="text-primary-500 text-5xl mb-3" />
            <h2 className="text-primary-700">problem1</h2>
            <p className="text-primary-900 w-28">
              비주류의 높은 가격변동성에 포지션이 노출되어 버린다는 문제가 있다.
            </p>
          </div>
          <div className="flex  items-center flex-col m-16 ">
            <SiHiveBlockchain className="text-primary-500 text-5xl mb-3" />
            <h2 className="text-primary-700">problem1</h2>
            <p className="text-primary-900 w-28">
              현재 선물시장에서의 불안정성​+ 애매한 탈중앙화​
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-6  items-center justify-center flex-col">
        <div className="text-primary-500 flex mt-10 items-center justify-center text-5xl font-bold mb-10">
          Solution
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl mb-2 text-primary-700 font-bold">
                Invest Smart
              </h1>
              <p className="text-primary-900">
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
              <h1 className="text-xl mb-2 text-primary-700 font-bold">
                Invest Smart
              </h1>
              <p className="text-primary-900">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl mb-2 text-primary-700 font-bold">
                Invest Smart
              </h1>
              <p className="text-primary-900">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>

          <div>
            <img src={home5} />
          </div>
        </div>
      </div>

      <div className="bg-primary-50 mb-20 shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Here are some common questions we get asked. If you don't see your
            question here, please contact us.
          </p>
        </div>
        <div>
          <dl>
            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                What is your return policy?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec nisi mauris. Sed ac enim aliquet, faucibus diam at,
                pellentesque tortor. In hac habitasse platea dictumst. Nullam id
                sem vel nunc pulvinar vulputate at quis massa. Donec consequat
                libero nec elit auctor, ac faucibus sapien varius. Praesent
                vitae ante non dolor faucibus fermentum vel quis eros. Fusce in
                sapien magna.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Do you offer free shipping?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Yes! We offer free shipping on all orders over $50.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                How long will it take to receive my order?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec nisi mauris. Sed ac enim aliquet, faucibus diam at,
                pellentesque tortor. In hac habitasse platea dictumst. Nullam id
                sem vel nunc pulvinar vulputate at quis massa. Donec consequat
                libero nec elit auctor, ac faucibus sapien varius. Praesent
                vitae ante non dolor faucibus fermentum vel quis eros. Fusce in
                sapien magna.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                How long will it take to receive my order?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec nisi mauris. Sed ac enim aliquet, faucibus diam at,
                pellentesque tortor. In hac habitasse platea dictumst. Nullam id
                sem vel nunc pulvinar vulputate at quis massa. Donec consequat
                libero nec elit auctor, ac faucibus sapien varius. Praesent
                vitae ante non dolor faucibus fermentum vel quis eros. Fusce in
                sapien magna.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex w-full p-6">
        <div className="flex w-full p-10  justify-center items-center flex-col">
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

      <div className="flex justify-center mb-10 items-center w-full bg-primary-50">
        <img src={ether} />
      </div>
    </main>
  );
};

export default Home;
