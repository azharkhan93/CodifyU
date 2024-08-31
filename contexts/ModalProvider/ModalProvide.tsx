import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Modal, ModalContent } from "@/components";
import { ModalContextProps } from "@/types";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const showModalTimer = setTimeout(() => setIsModalOpen(true), 5000);
    const hideModalTimer = setTimeout(() => setIsModalOpen(false), 1000);

    return () => {
      clearTimeout(showModalTimer);
      clearTimeout(hideModalTimer);
    };
  }, []);

  const toggleModal = (state: boolean) => () => setIsModalOpen(state);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal: toggleModal(true),
        closeModal: toggleModal(false),
      }}
    >
      {children}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal(false)}
        component={ModalContent}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
