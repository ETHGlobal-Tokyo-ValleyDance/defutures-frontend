import { useState } from 'react';

/** returns [state, open(), close()] */
export const useModal = (init: boolean): [boolean, () => void, () => void] => {
  const [isModalOpen, setIsOpen] = useState<boolean>(init);
  return [isModalOpen, () => setIsOpen(true), () => setIsOpen(false)];
};
