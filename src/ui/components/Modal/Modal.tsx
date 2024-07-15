import React, {FC, PropsWithChildren} from 'react';

import {
  FooterButtonDouble,
  FooterButtonDoubleProps,
  FooterButtonSingle,
  FooterButtonSingleProps,
  ModalBody,
  ModalBodyProps,
  ModalDefault,
  ModalOverlay,
} from './components';
import {ModalProps} from './props';

export const Modal: FC<PropsWithChildren<ModalProps>> & {
  FooterButtonDouble: FC<FooterButtonDoubleProps>;
  FooterButtonSingle: FC<FooterButtonSingleProps>;
  Body: FC<PropsWithChildren<ModalBodyProps>>;
} = ({
  testID,
  variant = 'default',
  isAnimated = true,
  isVisible = false,
  backgroundColor = 'white',
  ...rest
}) => {
  return variant === 'overlay' ? (
    <ModalOverlay
      {...{
        testID,
        variant,
        isAnimated,
        isVisible,
        backgroundColor,
        ...rest,
      }}
    />
  ) : (
    <ModalDefault
      {...{
        testID,
        variant,
        isAnimated,
        isVisible,
        backgroundColor,
        ...rest,
      }}
    />
  );
};

Modal.FooterButtonDouble = FooterButtonDouble;
Modal.FooterButtonSingle = FooterButtonSingle;
Modal.Body = ModalBody;
