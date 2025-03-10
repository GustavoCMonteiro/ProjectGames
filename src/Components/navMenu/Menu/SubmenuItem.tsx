interface MenuItemProps {
  title?: string;
  selected?: boolean;
  isMenuOpen?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ title, selected, isMenuOpen, onClick }: MenuItemProps) => {
  return (
    <button
      className={`w-full flex items-center gap-2 py-1.5 pl-2 rounded-lg relative
          ${selected ? "bg-white" : ""} 
          ${isMenuOpen ? "" : "justify-center"}`}
      onClick={onClick}
    >
      <span className="text-neutral600 text-smMedium text-start">
        {isMenuOpen ? title : ""}
      </span>
      {selected && (
        <>
          <div className="absolute h-10 border-l border-neutral300 -left-[13px] rounded-full"></div>
          <div className="absolute h-2 border-l-[3px] border-primary900 -left-3.5 rounded-full"></div>
        </>
      )}
    </button>
  );
};

export default MenuItem;
