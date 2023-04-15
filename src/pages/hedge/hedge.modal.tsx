import Modal from "components/common/Modal";
import { useHedge } from "./hedge.service";
import { useState } from "react";
import { cn } from "utils";
import { Step, StepButton } from "components/common/StepButton";
import { parseEther } from "ethers/lib/utils";
import { useSigner } from "states/wallet.state";

interface HedgeModalProps {
  close: () => void;
  hedges: ReturnType<typeof useHedge>;
}

export const HedgeModal = ({
  close,
  hedges: { totalSupply, baseToken, farmToken, totalAmount, spotPercent },
}: HedgeModalProps) => {
  const signer = useSigner();
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
    } catch {
    } finally {
      setIsLoading(true);
    }
  };

  const addPosition = async () => {
    if (step !== Step.Buy || !signer) return;
    try {
      setIsLoading(false);
      const spot = total.mul(Math.floor(+spotPercent * 10)).div(1e3);

      const tx = await farmToken
        .getChain()
        .getV2DefutureRouter()
        .connect(signer)
        .addLiquidityHedged(
          baseToken.address,
          farmToken.address,
          signer._address,
          spot,
          total.sub(spot)
        );

      await tx.wait();
      setStep(Step.Done);
    } catch {
    } finally {
      setIsLoading(true);
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
        <div className="w-[300px] h-[360px] pr-4">
          <div
            className={cn(
              "h-full shadow rounded-lg p-4",
              step === Step.Done && "border-4 -m-1 border-primary-500"
            )}
          >
            <div className="flex">
              <p className="chip-sm chip-neutral font-semibold">
                #{totalSupply + 1}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
