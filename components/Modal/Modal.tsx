import React from "react";
import {  CenterBox, StyledModal, } from "@/components/styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalProps } from "@/types";


export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  component: Component,
}) => {
  if (!isOpen) return null;

  return (
    <CenterBox
      zIndex={50}
      width={"100%"}
      height={"100vh"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      // bg={"modalOverlayBg"}
    >
      <StyledModal
        mt={["xlg", "none"]}
        bg={"textColor"}
        width={["97%", "45%"]}
        borderRadius={"xs"}
        position={"relative"}
        // boxShadow={BASE_COLORS.modalShadow}
        height="80%"
        overflowY={"scroll"}
      >
        <CenterBox
          p={"s"}
           bg={"primary"}
          borderRadius={"circle"}
          height={"33px"}
          width={"33px"}
          position={"absolute"}
          right={9}
          top={7}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="#eae9fd" />
        </CenterBox>
        <Component onClose={onClose} />
      </StyledModal>
    </CenterBox>
  );
};
