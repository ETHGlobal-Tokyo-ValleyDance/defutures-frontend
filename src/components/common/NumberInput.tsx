import { ChangeEventHandler } from "react";

interface NumberInputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    value: string
  onChange: (value: string) => void;
}
export const NumberInput = ({ onChange, ...props }: NumberInputProps) => {
  const onChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input className="outline-none border px-4 py-2 rounded-md" onChange={onChangeEvent} {...props} />
    </div>
  );
};
