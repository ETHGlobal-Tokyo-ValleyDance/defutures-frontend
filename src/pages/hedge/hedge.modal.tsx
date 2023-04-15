import Modal from "components/common/Modal";
import { useHedge } from "./hedge.service";
import { useState } from "react";
import { cn } from "utils";
import { Step, StepButton } from "components/common/StepButton";
import { parseEther } from "ethers/lib/utils";
import { useSigner } from "states/wallet.state";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TokenIcon } from "components/common/TokenIcon";
import {BsFillCheckCircleFill} from "react-icons/bs"
import { sendAddHedgeTx } from "api/sendAddHedgeTx";

interface HedgeModalProps {
  close: () => void;
  hedges: ReturnType<typeof useHedge>;
}

export const HedgeModal = ({
  close,
  hedges: { totalSupply, baseToken, farmToken, totalAmount, spotPercent, spotAmount },
}: HedgeModalProps) => {
  const { signer, account } = useSigner();
  const total = parseEther(totalAmount);
  const [step, setStep] = useState<Step>(Step.Approve);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const approve = async () => {
    if (step !== Step.Approve || !signer) return;
    try {
      setIsLoading(true);
      const tx = await farmToken
        .getContract()
        .connect(signer)
        .approve(farmToken.getChain().defuture.router, total);
      await tx.wait();
      setStep(Step.Buy);
      sendAddHedgeTx(farmToken.chainId, tx.hash);// no need to wait
    } catch (e) {
      console.log("Hedge Amount Error", e);
    } finally {
      setIsLoading(false);
    }
  };

  const addPosition = async () => {
    if (step !== Step.Buy || !signer) return;
    try {
      setIsLoading(true);
      const spot = total.mul(Math.floor(+spotPercent * 10)).div(1e3);

      const tx = await farmToken
        .getChain()
        .getV2DefutureRouter()
        .connect(signer)
        .addLiquidityHedged(
          baseToken.address,
          farmToken.address,
          await signer.getAddress(),
          spot,
          total.sub(spot)
        );

      await tx.wait();
      setStep(Step.Done);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onDone = () => {
    setStep(Step.Approve);
    close();
  };

  return (
    <Modal closeModal={close} title="Open Hedge Position">
      <div className="p-4 pb-6 flex">
        {/* LEFT SIDE */}
        <div className="flex flex-1 flex-col justify-center p-4 pb-8 mr-10">
          <p
            className={cn(
              "text-lg mb-2",
              step === Step.Approve ? "font-semibold" : "text-neutral-500"
            )}
          >
            1. Approve your token
          </p>
          <StepButton
            onClick={approve}
            currentStep={step}
            targetStep={Step.Approve}
          >
            Approve {baseToken.symbol}
          </StepButton>

          <p
            className={cn(
              "text-lg mt-4 mb-2",
              step === Step.Buy ? "font-semibold" : "text-neutral-500"
            )}
          >
            2. Buy Future NFT 🎉
          </p>
          <StepButton
            onClick={addPosition}
            currentStep={step}
            targetStep={Step.Buy}
          >
            Open {baseToken.symbol} Hedge Position
          </StepButton>

          <div className="flex-center mt-8">
            {step === Step.Done ? (
              <button onClick={onDone} className="btn btn-primary w-32 h-12">
                Done!
              </button>
            ) : (
              <div className="w-32 h-12" />
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-[300px] h-[360px] mr-4">
          {/* LOADING */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/40 rounded-lg flex-center flex-col">
              <AiOutlineLoading3Quarters
                size={40}
                color="white"
                className="mb-4 animate-spin "
              />
              {step === Step.Approve ? (
                <div className="mt-4 flex animate-bounce">
                  <p className="text-2xl text-center font-semibold text-white">
                    Approving {baseToken.symbol}
                  </p>
                  <TokenIcon className="ml-2" token={baseToken} />
                </div>
              ) : step === Step.Buy ? (
                <div className="mt-4 flex animate-bounce">
                  <p className="text-2xl text-center font-semibold text-white">
                    Pending Transaction...
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          )}

          {/* NFT CARD PREVIEW */}
          <div
            className={cn(
              "h-full shadow rounded-lg p-4 flex flex-col",
              step === Step.Done && "border-4 -m-1 border-primary-500"
            )}
          >
            <div className="flex items-center">
                <span className="chip-sm chip-neutral font-semibold">
                #{totalSupply + 1}
                </span>
                {step === Step.Done && (
                    <BsFillCheckCircleFill size={16} className="ml-1.5 text-green-600" />
                )}
            </div>

            <div className="flex-1 flex-col flex-center mb-2">
                <span className="chip chip-blue mb-2">Base</span>
                <div className="flex items-center">
                    <TokenIcon token={baseToken}/>
                    <p className="ml-2 text-2xl">{totalAmount} {baseToken.symbol}</p>
                </div>

                <p className="font-bold">↓</p>
                <div className="my-4 flex w-full items-center">
                    <p className="text-lg flex-1 text-center">{spotAmount} {baseToken.symbol}</p>
                    <p className="text-lg font-bold">+</p>
                    <p className="text-lg flex-1 text-center"> {(1000 * +totalAmount - spotAmount * 1000) / 1000} {baseToken.symbol}</p>
                </div>
                <p className="font-bold">↓</p>

                <span className="chip chip-primary mb-2">Farm</span>
                <div className="flex items-center">
                    <TokenIcon token={farmToken}/>
                    <p className="ml-2 text-2xl">{farmToken.symbol}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
