import classnames from "classnames";
import type { ComponentPropsWithRef, FC, ReactNode } from "react";
import React from "react";

import styles from "./button.module.scss";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  onClick?: () => void;
  loading?: boolean;

  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  disabled,
  loading,
  children,
  className,
  ...props
}) => {
  const classes = classnames(styles.button, className);

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
};
