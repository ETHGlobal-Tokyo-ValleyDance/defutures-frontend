import Modal from "components/common/Modal";
import { useFuture } from "./future.service";
import { HTMLAttributes, useState } from "react";
import { cn } from "utils";

interface FutureModalProps {
  close: () => void;
  futures: ReturnType<typeof useFuture>;
}

enum Step {
  Approve,
  Buy,
  Done,
}
export const FutureModal = ({
  close,
  futures: { shortToken, longToken, margin, totalSupply, longAmount },
}: FutureModalProps) => {
  const [step, setStep] = useState<Step>(Step.Approve);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const approve = async () => {
    if (step !== Step.Approve) return;
    console.log("asdasd")
    try {
      setIsLoading(true);
      // const tx = await shortToken
      //   .getContract()
      //   .approve(shortToken.getChain().defuture.address, parseEther(margin));
      // await tx.wait();
      setStep(Step.Buy);
    } catch {
    } finally {
      setIsLoading(true);
    }
  };

  const addPosition = async () => {
    if (step !== Step.Buy) return;
    try {
      setIsLoading(false);
      // const tx = await shortToken
      //   .getChain()
      //   .getV2DefutureRouter()
      //   .addPosition(
      //     longToken.address,
      //     shortToken.address,
      //     "TODO",
      //     longToken.parse(longAmount),
      //     shortToken.parse(margin),
      //     ethers.constants.MaxUint256
      //   );
      // await tx.wait();
      setStep(Step.Done);
    } catch {
    } finally {
      setIsLoading(true);
    }
  };

  const onDone = () => {
    setStep(Step.Approve);
    close()
  }

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
            Approve ${shortToken.symbol}
          </StepButton>

          <p
            className={cn(
              "text-lg mt-4 mb-2",
              step === Step.Buy ? "font-semibold" : "text-neutral-500"
            )}
          >
            2. Buy Future NFT 🎉
          </p>
          <StepButton onClick={addPosition} currentStep={step} targetStep={Step.Buy}>
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
        <div className="w-[300px] h-[360px] pr-4">
          <div className={cn("h-full shadow rounded-lg p-4", step===Step.Done && "border-4 -m-1 border-primary-500")}>
            <div className="flex">
              <p className="chip-sm chip-neutral font-semibold">#{totalSupply + 1}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

interface StepButtonProps extends HTMLAttributes<HTMLButtonElement> {
  targetStep: Step;
  currentStep: Step;
  doneText?: string;
}
const StepButton = ({
  targetStep,
  currentStep,
  children,
  doneText = "Done",
  ...props
}: StepButtonProps) => {
  return (
    <button
      disabled={targetStep !== currentStep}
      className={cn(
        "btn",
        targetStep === currentStep ? "btn-primary" : "btn-secondary"
      )}
      {...props}
    >
      {targetStep < currentStep ? doneText : children}
    </button>
  );
};