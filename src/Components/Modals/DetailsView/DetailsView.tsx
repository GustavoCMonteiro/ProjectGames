import Button from "../../Buttons/Button";
import { RiArrowLeftLine } from "@remixicon/react";

interface DetailsViewProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}

const DetailsView = ({
  modalOpen,
  setModalOpen,
  children,
  className,
}: DetailsViewProps) => {
  return (
    <div
      className={`absolute w-full h-[calc(100%-80px)] overflow-x-hidden scrollbarCustom z-10 ${
        modalOpen ? "" : "translate-x-full pointer-events-none"
      } transition-all duration-300 ${className}`}
    >
      <div className="min-h-full flex flex-col gap-4 py-8 bg-white pr-12">
        <div className="w-fit">
          <Button
            title="Voltar"
            type="ghost"
            size="small"
            iconSide="left"
            onClick={() => setModalOpen(false)}
            className="flex items-center gap-1 pl-0"
          >
            <RiArrowLeftLine size={16} />
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default DetailsView;
