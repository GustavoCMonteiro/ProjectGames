import { useMemo, useRef } from "react";

interface ButtonProps {
  title?: string;
  type: "primary" | "secondary" | "neutral" | "ghost" | "destructive";
  size: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  iconSide?: "left" | "right";
  onClick: () => void;
  loading?: boolean;
  formButton?: boolean;
}

const Button = ({
  title,
  type,
  size,
  className,
  disabled,
  children,
  iconSide,
  onClick,
  loading,
  formButton,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useMemo(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        buttonRef.current?.click();
      }
    };
    if (formButton) {
      document.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [formButton]);

  const buttonSize = useMemo(() => {
    const sizes = {
      large: "px-4 py-3 rounded-full",
      medium: "text-sm px-4 py-2.5 rounded-full",
      small: "text-sm px-3 py-1.5 rounded-full",
    };
    return sizes[size];
  }, [size]);

  const buttonStyle = useMemo(() => {
    const styles = {
      primary: "",
      secondary: "",
      neutral: "",
      ghost: "",
      destructive: "",
    };
    return styles[type];
  }, [type]);

  const disableStyle = useMemo(() => {
    const styles = {
      primary: "opacity-30",
      secondary: "opacity-30",
      neutral: "opacity-30",
      ghost: "!text-dark opacity-30",
      destructive: "!text-white opacity-30",
    };
    return styles[type];
  }, [type]);

  return (
    <button
      className={`whitespace-nowrap ${buttonSize} ${className} ${buttonStyle} transition-colors duration-200 ${
        disabled ? disableStyle : ""
      }`}
      onClick={onClick}
      style={{
        boxShadow:
          type === "primary" || type === "secondary"
            ? "0px 1px 1px 0px rgba(20, 21, 26, 0.15)"
            : "",
      }}
      disabled={loading || disabled}
      ref={formButton ? buttonRef : null}
    >
      {iconSide === "left" && children}
      {loading ? <div className="loader"></div> : title}
      {iconSide === "right" && children}
    </button>
  );
};

export default Button;
