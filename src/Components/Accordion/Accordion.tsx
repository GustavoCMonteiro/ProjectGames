import { useState, useRef, useEffect } from "react";

import Button from "../Buttons/Button";
import { RiArrowDownSLine } from "@remixicon/react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showContent ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [showContent]);

  return (
    <div>
      <Button
        title={title}
        onClick={() => setShowContent(!showContent)}
        size="small"
        type="ghost"
        iconSide="left"
        className="w-fit flex items-center gap-1.5"
      >
        <RiArrowDownSLine
          size={16}
          className={`${
            !showContent ? "-rotate-90" : ""
          } transition-transform duration-300`}
        />
      </Button>

      <div
        ref={contentRef}
        style={{ height }}
        className={`transition-all duration-300 overflow-hidden ${
          showContent ? "mt-4" : "pointer-events-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
