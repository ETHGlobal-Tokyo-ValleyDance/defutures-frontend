import { HTMLAttributes } from "react";
import { cn } from "utils";

export enum Step {
  Approve,
  Buy,
  Done,
}
interface StepButtonProps extends HTMLAttributes<HTMLButtonElement> {
  targetStep: Step;
  currentStep: Step;
  doneText?: string;
}
export const StepButton = ({
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
