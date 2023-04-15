import Modal from "components/common/Modal";
import { useFuture } from "./future.service";
import { useState } from "react";
import { cn } from "utils";
import { Step, StepButton } from "components/common/StepButton";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useSigner } from "states/wallet.state";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TokenIcon } from "components/common/TokenIcon";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { sendAddPositionTx } from "api/sendAddPositionTx";

interface FutureModalProps {
  close: () => void;
  futures: ReturnType<typeof useFuture>;
}

export const FutureModal = ({
  close,
  futures: {
    shortToken,
    longToken,
    margin,
    totalSupply,
    longAmount,
    shortAmount,
  },
}: FutureModalProps) => {
  const [step, setStep] = useState<Step>(Step.Buy);
  const { signer, account } = useSigner();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const approve = async () => {
    if (step !== Step.Approve || !signer) return;
    try {
      setIsLoading(true);

      // TODO: SIGNER
      const tx = await shortToken
        .getContract()
        .connect(signer)
        .approve(shortToken.getChain().defuture.router, parseEther(margin));
      await tx.wait();
      sendAddPositionTx(longToken.chainId, tx.hash);// no need to wait
      setStep(Step.Buy);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const addPosition = async () => {
    if (step !== Step.Buy || !signer) return;
    try {
      setIsLoading(true);

      // TODO: SIGNER
      const tx = await shortToken
        .getChain()
        .getV2DefutureRouter()
        .connect(signer)
        .addPosition(
          longToken.address,
          shortToken.address,
          account!,
          longToken.parse(longAmount),
          shortToken.parse(margin),
          ethers.constants.MaxUint256
        );
      await tx.wait();
      setStep(Step.Done);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const onDone = () => {
    setStep(Step.Approve);
    close();
  };

  return (
    <Modal closeModal={close} title="Buy Future">
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
            Approve {shortToken.symbol}
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
            Buy {shortToken.symbol} → {longToken.symbol}
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
          {isLoading && (
            <div className="absolute inset-0 bg-black/30 rounded-lg flex-center flex-col">
              <AiOutlineLoading3Quarters
                size={40}
                color="white"
                className="mb-4 animate-spin "
              />
              {step === Step.Approve ? (
                <div className="mt-4 flex animate-bounce">
                  <p className="text-2xl text-center font-semibold text-white">
                    Approving {shortToken.symbol}
                  </p>
                  <TokenIcon className="ml-2" token={shortToken} />
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

          {/* NFT PREVIEW */}
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
                <BsFillCheckCircleFill
                  size={16}
                  className="ml-1.5 text-green-600"
                />
              )}
            </div>

            <div className="flex-1 flex-col flex-center mb-2">
              <span className="chip chip-blue mb-2">Base</span>
              <div className="flex items-center">
                <TokenIcon token={shortToken} />
                <p className="ml-2 text-2xl">
                  {shortAmount} {shortToken.symbol}
                </p>
              </div>

              <p className="font-extrabold text-2xl my-4">↓</p>

              <span className="chip chip-primary mb-2">Farm</span>
              <div className="flex items-center">
                <TokenIcon token={longToken} />
                <p className="ml-2 text-2xl">
                  {longAmount} {longToken.symbol}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
