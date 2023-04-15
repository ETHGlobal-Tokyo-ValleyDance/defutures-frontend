import home1 from "../../assets/home/home1.png";
import home2 from "../../assets/home/home2.png";
import home3 from "../../assets/home/home3.png";
import home4 from "../../assets/home/home4.png";
import home5 from "../../assets/home/home5.png";
import jiho from "../../assets/home/profile/jiho.png";
import jihwan from "../../assets/home/profile/jihwan.jpeg";
import suha from "../../assets/home/profile/suha.jpeg";
import sooyoung from "../../assets/home/profile/sooyoung.jpeg";
import jakyung from "../../assets/home/profile/jakyung.jpg";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { SiHiveBlockchain } from "react-icons/si";

const Home = () => {
  const plans = [
    { id: 1, title: "Q2 2023", content: "Product launch", detail: "detail" },
    {
      id: 2,
      title: "Q4 2023",
      content: "Expanding to new markets",
      detail: "detail",
    },
    {
      id: 3,
      title: "Q2 2024",
      content: "Release of new features",
      detail: "detail",
    },
  ];
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex justify-center max-w-screen-lg mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-primary-500 text-shadow-gray text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
            Introducing Defutures:
          </h1>
          <p className="mt-3 text-l text-gray-500 sm:mt-4">
            Revolutionize your Web3 investments with our 100% decentralized
            futures market on the Ethereum Virtual Machine (EVM).
            <br />
            Defutures effectively resolves the pressing issue of diminishing
            position values in existing DeFi platforms, caused by the volatility
            of paired tokens. By enabling users to open hedging future
            positions, Defutures presents a comprehensive and reliable solution
            to mitigate this problem.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <Link to="/future">
                <button className="btn-lg btn-primary">Get started</button>
              </Link>
            </div>
          </div>
        </div>

        <img className=" w-[360px] animate-pulse duration-1000" src={home1} />
      </div>

      <div className="flex w-full p-10 bg-primary-100 justify-center items-center flex-col">
        <h1 className="text-primary-500 text-shadow-gray text-5xl mb-20 leading-9 font-extrabold  sm:leading-10">
          Problem
        </h1>
        <h1 className=" text-primary-400 text-lg  leading-9 font-extrabold sm:text-4xl sm:leading-10">
          Problems with the current futures market
        </h1>
        <div className="flex flex-row ">
          <div className="flex items-center flex-col m-16">
            <AiFillCloseCircle className="text-primary-500 w-28 h-28 text-5xl mb-3" />
            <h2 className="text-primary-700 mb-6 text-xl font-bold">
              {" "}
              Poor Accessibility
            </h2>
            <div className=" text-center text-gray-600 w-48">
              In the blockchain gift market, investors often have to use complex
              strategies to hedge their positions, which can make it difficult
              for new investors to enter the market and cause instability.
            </div>
          </div>
          <div className="flex  items-center flex-col m-16">
            <CgDanger className="text-primary-500  w-28 h-28 text-5xl mb-3" />
            <h2 className="text-primary-700 mb-6 text-xl font-bold">Risk</h2>
            <div className=" text-center text-gray-600 w-48">
              Users who invest in DEX in order to achieve high returns must
              invest in a pool of mainstream and non-mainstream tokens. However,
              if they invest in this pool, they are exposed to the high price
              volatility of non-mainstream tokens, which can pose a problem for
              their position.
            </div>
          </div>
          <div className="flex  items-center flex-col m-16 ">
            <SiHiveBlockchain className="text-primary-500 w-28 h-28 text-5xl mb-3" />
            <h2 className="text-primary-700 mb-6 text-xl font-bold">
              Not fully decentralized
            </h2>
            <div className=" text-center text-gray-600 w-48">
              As most of the services supporting futures markets currently use
              order book systems, it cannot be considered a fully decentralized
              approach, hence it is not 100% decentralized.
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-6  items-center justify-center flex-col">
        <div className="text-primary-500 text-shadow-gray flex mt-10 items-center justify-center text-5xl font-bold mb-10">
          Solution
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[36px] mb-2 text-primary-700 font-bold">
                Safety
              </h1>
              <p className="text-primary-900 w-[600px]">
                Our service applies the methods used in futures trading,
                allowing investors to hedge their positions against the high
                price volatility of minor tokens.
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
              <h1 className="text-[36px] mb-2 text-primary-700 font-bold">
                Friendly UX
              </h1>
              <p className="text-primary-900 w-[600px]">
                Our service provides a user-friendly interface, allowing users
                to easily enter into futures contracts and invest assets. It
                also clearly explains the terms of the futures contract and
                makes it easy for investors to understand.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mb-10">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[36px] mb-2 text-primary-700 font-bold">
                Full decentralization
              </h1>
              <p className="text-primary-900 w-[600px]">
                Unlike existing order book based futures exchanges, trading is
                handled in a decentralized way. This guarantees security and
                transparency, and enables free trade with few intermediary fees
                or restrictions.
              </p>
            </div>
          </div>

          <div>
            <img src={home5} />
          </div>
        </div>
      </div>

      <div className="bg-primary-50 mb-20  p-14 shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h3 className=" text-3xl leading-8 font-extrabold tracking-tight text-primary-500 text-shadow-gray">
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
                What is the duration of a futures contract?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                The duration of a futures contract can be adjusted flexibly.
                Users can set the duration as they wish, and typically use a
                period ranging from one week to six months.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                How are the fees for a futures contract calculated?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                The fees for a futures contract vary depending on the futures
                exchange. Our service keeps fees low, and strives to enable
                users to conclude futures contracts cheaply.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                How is the price of a futures contract determined?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                The price of a futures contract is determined by considering
                various factors such as the current market price, trading
                volume, and market predictions. This helps increase reliability
                in the market and maximize user benefits.
              </dd>
            </div>

            <div className="bg-primary-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Which cryptocurrencies are included as the subject of futures
                contracts?
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Various cryptocurrencies are targeted on our service. Users can
                choose the cryptocurrency they want and conclude a futures
                contract.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex w-full p-6">
        <div className="flex w-full p-8  justify-center items-center flex-col">
          <div className="lg:text-center">
            <div className="flex">
              <img src={home2} />
              <div className="flex flex-col items-center justify-center ml-5">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-500 text-shadow-gray sm:text-4xl">
                  Meet our team
                </p>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Our team contributes to promoting the value of
                  decentralization and the advantages of Ethereum, and further
                  developing blockchain technology.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="rounded-md shadow">
                    <Link to="/future">
                      <button className="btn-lg btn-primary">
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-24">
              <Profile
                img={suha}
                role={"Contract Developer"}
                name={"Suha Jin"}
                link={"https://github.com/djm07073"}
              />
              <Profile
                img={sooyoung}
                role={"Project Manager"}
                name={"Sooyoung Lee"}
                link={"https://github.com/swimmiee"}
              />
              <Profile
                img={jihwan}
                role={"Contract Developer"}
                name={"Jihwan An"}
                link={"https://github.com/winterjihwan"}
              />
            </div>
            <div className="flex mt-10 justify-around">
              <Profile
                img={jiho}
                role={"Frontend Developer"}
                name={"JiHo Lee"}
                link={"https://github.com/mangming2"}
              />

              <Profile
                img={jakyung}
                role={"Backend Developer"}
                name={"Jakyung Koo"}
                link={"https://github.com/lawkelvin33"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-primary-50 p-24 w-full justify-center items-center">
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">
                Roadmap
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-500 sm:text-4xl">
                Our Future Plans
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="relative p-8 bg-white shadow-lg rounded-md"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        {plan.title}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {plan.content}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 text-gray-500">
                    <p className="text-base">{plan.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
