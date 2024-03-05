import classnames from "classnames";
import type { ComponentPropsWithRef, FC, ReactNode } from "react";
import React from "react";

import styles from "./button.module.scss";

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  disabled,
  loading,
  children,
  className,
  ...props
}) => {
  const classes = classnames(styles.button, className, disabled ? styles.disabled : undefined);

  return (
    <button className={classes} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
};
