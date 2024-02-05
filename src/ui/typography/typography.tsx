import classNames from "classnames";
import type { FC } from "react";
import React from "react";

import styles from "./typography.module.scss";

const sizes = {
  default: styles.default,
  medium: styles.medium,
  large: styles.large,
} as const;

type Size = keyof typeof sizes;

interface TypographyProps {
  tag: string;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  tag = "h1",
  size = "default",
  children,
  className,
}) => {
  const Component = tag as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={classNames(styles.typography, sizes[size], className)}
    >
      {children}
    </Component>
  );
};
