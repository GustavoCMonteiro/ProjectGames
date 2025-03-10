import { useMemo } from "react";

interface BadgeProps {
  title?: string;
  type:
    | "primary"
    | "secondary"
    | "neutral"
    | "information"
    | "success"
    | "warning"
    | "destructive";
  size: "small" | "medium" | "large";
  border?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Badge = ({
  title,
  type,
  size,
  border,
  iconLeft,
  iconRight,
}: BadgeProps) => {
  const badgeSize = useMemo(() => {
    const sizes = {
      large: "text-sm px-2 py-1.5",
      medium: "text-sm px-2 py-1",
      small: "text-xs px-1.5 py-0.5",
    };
    return sizes[size];
  }, [size]);

  const badgeStyle = useMemo(() => {
    const styles = {
      primary: "",
      secondary: "",
      neutral: "",
      information: "",
      success: "",
      warning: "",
      destructive: "",
    };
    return styles[type];
  }, [type]);

  return (
    <span
      className={`flex gap-1 justify-center items-center whitespace-nowrap rounded-full ${badgeStyle} ${badgeSize} ${
        border ? "border" : ""
      }`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {title}
      {iconRight && <span>{iconRight}</span>}
    </span>
  );
};

export default Badge;
