import React, { useEffect, useRef } from "react";

import { RiCloseLine } from "@remixicon/react";

interface ModalProps {
  button: React.ReactNode;
  children: React.ReactNode;
  childrenStyle?: string;
  animation?: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFullScreen?: boolean;
}

const Modal = ({
  button,
  children,
  childrenStyle,
  modalOpen,
  setModalOpen,
  isFullScreen = false,
  animation = `${
    modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  } transition-all duration-200`,
}: ModalProps) => {
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (e: React.MouseEvent) => {
    setModalOpen(!modalOpen);
    e.stopPropagation();
  };

  useEffect(() => {
    const handleCloseModal = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setModalOpen(false);
      }
    };

    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleCloseModal);
      document.addEventListener("keydown", handleEscPress);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
      document.removeEventListener("keydown", handleEscPress);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [modalOpen, setModalOpen]);

  return (
    <div className="relative">
      <div className="w-fit" onClick={handleModalOpen} ref={menuButtonRef}>
        {button}
      </div>

      {isFullScreen ? (
        <div className={`z-20 fixed w-full h-full top-0 right-0 ${animation}`}>
          <div className="w-full h-full flex justify-center items-center bg-[rgba(121,121,121,0.5)]">
            <div ref={menuRef} className="w-full md:w-auto">
              <div
                className={`relative md:w-[694px] max-h-[calc(100vh-40px)] bg-white p-6 rounded-[20px] m-4 ${childrenStyle}`}
              >
                <button
                  className="absolute top-4 right-4 p-1.5 bg-neutral200 hover:bg-neutral50 rounded-full transition-colors duration-200"
                  onClick={() => setModalOpen(false)}
                >
                  <RiCloseLine size={14} />
                </button>
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`z-20 ${childrenStyle} ${animation}`} ref={menuRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
