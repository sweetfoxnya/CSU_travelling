import React, { MouseEvent, useRef } from 'react';

import * as Styles from './Modal.styles';
import { ModalProps } from './Modal.types';
import {createPortal} from "react-dom";

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
  } = props;

  const bodyRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!bodyRef.current || !onClose) {
      return;
    }

    if (!bodyRef.current.contains(event.target as HTMLElement)) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal((
    <Styles.Overlay onClick={(event) => handleOverlayClick(event)}>
      <Styles.Body ref={bodyRef}>
        {onClose && (
          <Styles.CloseButton
            onClick={() => onClose()}
          >
            X
          </Styles.CloseButton>
        )}
        {children}
      </Styles.Body>
    </Styles.Overlay>
  ), document.body);
};
