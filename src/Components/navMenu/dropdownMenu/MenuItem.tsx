interface MenuItemProps {
  icon?: React.ReactNode;
  title?: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const MenuItem = ({
  icon,
  title,
  selected,
  onClick,
  className,
  children,
}: MenuItemProps) => {
  return (
    <button
      className={`flex justify-between items-center gap-1 py-2 px-1.5 rounded-md ${className} ${
        selected ? "" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        {children && children}
        {icon && !children && icon}
        {title}
      </div>
    </button>
  );
};

export default MenuItem;
