import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose, IoMdArrowBack } from 'react-icons/io'
import type { ReactNode, FC } from "react";

interface Props {
  onBack?: () => void; // if truthy, BackIcon rendered
  closeModal: () => void;
  children: ReactNode;
  title?: string;
  closable?: boolean;
}

const Modal: FC<Props> = ({
  title,
  children,
  closable = true,
  onBack,
  closeModal,
}) => {
  const portalRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.getElementById("modal");
    setIsMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  if (!isMounted) return null;
  return createPortal(
    <div className="z-10 fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-neutral-900/40 overflow-y-hidden"
        onClick={closable ? closeModal : undefined}
      />

      <div className="w-[720px] z-50 overflow-hidden rounded-xl bg-white pt-6">
        <header className="mx-4 flex items-center justify-between">
          {onBack && (
            <div onClick={onBack} className="cursor-pointer">
                <IoMdArrowBack size={18} />
            </div>
          )}
          <p className="text-neutral-900 text-lg font-semibold">{title}</p>
          {closable && (
            <div onClick={closeModal} className="cursor-pointer">
              <IoMdClose size={18} />
            </div>
          )}
        </header>
        {children}
      </div>
    </div>,
    portalRef.current!
  );
};

export default Modal;