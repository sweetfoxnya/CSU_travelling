import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from './styles';

export const Input =
  React.forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => (
    <Styles.Input
      {...props}
      ref={ref}
    />
));
