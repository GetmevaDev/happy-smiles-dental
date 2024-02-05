import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import classnames from "classnames";

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
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};
