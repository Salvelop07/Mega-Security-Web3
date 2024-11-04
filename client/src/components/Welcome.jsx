import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Input from "./Input";
import { useState } from "react";
import Loader from "./Loader";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  const connectWallet = async () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  
  const handleSubmit = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <section className="flex flex-col lg:flex-row p-6 w-full justify-center items-center">
      <div className="flex md:flex-row flex-col flex-1 justify-between items-start md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl py-1 text-white text-gradient">
            Send crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12  w-11/ text-base  ">
            Send digital assets globally with secure, fast, and decentralized
            transactions.
          </p>
          <button
            className="flex flex-row text-base font-semibold justify-center items-center my-5 bg-blue-600 text-white p-3 rounded-md "
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col flex-1 w-full items-center justify-start mt-10 md:mt-0">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
          <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div>
              <p className="text-white font-light text-sm">Address</p>
              <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>

        <form
          className="p-5 relative  sm:w-96 w-full blue-glassmorphism flex flex-col justify-start items-center  "
          action=""
        >
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          />
          <div className="h-[1px] w-full bg-gray-400 my-2"></div>
          {isLoading ? (
            <Loader />
          ) : (
            <button
              onClick={handleSubmit}
              type="button"
              className="px-10 w-full mt-2 py-2 bg-blue-600 text-white  rounded-xl"
            >
              Send Now
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Welcome;
