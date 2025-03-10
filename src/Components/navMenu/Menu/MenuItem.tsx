interface MenuItemProps {
  icon?: React.ReactElement;
  title?: string;
  selected?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ icon, title, selected, onClick }: MenuItemProps) => {
  return (
    <button
      className={`w-full flex items-center gap-2 py-1.5 pl-2 rounded-lg cursor-pointer
          ${selected ? "bg-white" : ""}`}
      onClick={onClick}
    >
      {icon && icon}

      <span className="">{title}</span>
    </button>
  );
};

export default MenuItem;
