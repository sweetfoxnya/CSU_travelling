import React, {ComponentPropsWithoutRef} from 'react';

import {Color} from "@shared";

export const Logo = ({width = 40, height = 57, color = Color.White, ...restProps}: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 56"
         fill="none" {...restProps}>
    <rect width={width} height={height} fill={color} />
  </svg>
  );
};
