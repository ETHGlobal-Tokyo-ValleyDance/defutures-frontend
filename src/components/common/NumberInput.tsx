import { ChangeEventHandler } from "react";
import { cn } from "utils/cn";

interface NumberInputProps {
  className?: string;
  value: string;
  onChange: (val: string) => void;
  left?: React.ReactNode | null;
  right?: React.ReactNode | null;
}

export const NumberInput = ({
  className,
  value,
  onChange,
  left = null,
  right = null,
}: NumberInputProps) => {
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isNaN(+e.target.value)) onChange(e.target.value);
  };

  return (
    <div
      className={cn(
        className,
        "flex gap-4 shadow-lg items-center justify-between bg-neutral-100 border-neutral-200 border px-4 py-3.5 rounded-md"
      )}
    >
      {left}
      <input
        className="outline-none bg-transparent flex-1 text-right text-lg"
        placeholder="0.0"
        value={value}
        onChange={onChangeValue}
      />
      {right}
    </div>
  );
};
