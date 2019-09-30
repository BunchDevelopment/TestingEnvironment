import React from "react";
import "./button.css";

const TYPES = {
  PRIMARY: "primary",
  WARNING: "warning",
  DANGER: "danger",
  SUCCESS: "success"
};

export const SIZES = {
  XS: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

const BaseButton = ({
  onClick,
  type,
  disabled,
  buttonType,
  buttonSize,
  title,
  styles,
  children,
  testid
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    title={title}
    style={styles}
    data-testid={testid}
    // quick ternary to remove style for default disabled style
    className={`${buttonType} ${buttonSize} btnStyle`}
  >
    {children}
  </button>
);

export const Primary = props => (
  <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const Warning = props => (
  <BaseButton {...props} buttonType={TYPES.WARNING} />
);
export const Danger = props => (
  <BaseButton {...props} buttonType={TYPES.DANGER} />
);
export const Success = props => (
  <BaseButton {...props} buttonType={TYPES.SUCCESS} />
);
