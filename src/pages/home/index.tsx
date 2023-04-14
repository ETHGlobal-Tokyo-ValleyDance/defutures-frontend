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
            You can reduce uncertain risks and earn high returns.
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
            <h2 className="text-primary-700 mb-6"> 구린 진입성</h2>
            <div className=" text-center text-primary-900 w-48">
              블록체인 선물시장에서는 투자자들이 자신의 포지션을 헷징하기 위해
              복잡한 전략을 사용해야 하는 경우가 많습니다. 이는 새로운
              투자자들이 시장에 진입하기 어렵게 만들어 불안정성을 야기할 수
              있습니다.
            </div>
          </div>
          <div className="flex  items-center flex-col m-16">
            <CgDanger className="text-primary-500 text-5xl mb-3" />
            <h2 className="text-primary-700 mb-6">problem1</h2>
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
                선물 계약의 기간은 얼마나 됩니까?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                선물 계약의 기간은 유동적으로 조절 가능합니다. 기간은 사용자가
                원하는 만큼 설정할 수 있으며, 일반적으로 1주부터 6개월까지의
                기간을 사용합니다.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                선물 계약의 가격은 어떻게 결정됩니까?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                선물 계약의 가격은 시장에서의 현재 가격, 거래량, 시장 예측 등
                여러 요인을 고려하여 결정됩니다. 이를 통해 시장에 대한 신뢰성을
                높이고 사용자들의 이익을 극대화할 수 있습니다.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                선물 계약의 수수료는 어떻게 책정됩니까?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                선물 계약의 수수료는 선물 거래소에 따라 다릅니다. 우리 서비스는
                수수료를 낮게 유지하며, 사용자들이 저렴하게 선물 계약을 체결할
                수 있도록 노력하고 있습니다.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                어떤 암호화폐가 대상이 되는 것인가요?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                우리 서비스에서는 다양한 암호화폐가 대상이 됩니다. 사용자들은
                원하는 암호화폐를 선택하여 선물 계약을 체결할 수 있습니다.
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
