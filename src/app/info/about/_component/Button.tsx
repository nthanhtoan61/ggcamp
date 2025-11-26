import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      className = "",
      type = "button",
      ariaLabel,
      variant = "primary",
      disabled = false,
    },
    ref
  ) => {
    const [hover, setHover] = React.useState(false);

    const baseStyle: React.CSSProperties = {
      fontWeight: 600,
      padding: "calc(1vh) calc(2vw)",
      borderRadius: 8,
      color: hover ? "#E9A919" : "#ffffff",
      backgroundColor: hover ? "transparent" : "#E9A919",
      border: hover ? "2px solid #E9A919" : "2px solid transparent",
      transition: "all 200ms ease",
      cursor: disabled ? "not-allowed" : "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    };

    if (disabled) {
      baseStyle.opacity = 0.6;
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={className}
        aria-label={ariaLabel}
        disabled={disabled}
        style={baseStyle}
      >
        {children}
      </button>
    );
  }
);

export default Button;
