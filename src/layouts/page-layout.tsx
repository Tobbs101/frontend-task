import { formatDate } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

const PageLayout = ({
  pageTitle = "Untitled",
  pageDescription = "Untitled Description",
  children,
}: {
  pageTitle: string;
  pageDescription: string;
  children?: ReactNode;
}) => {
  useEffect(() => {
    document.title = `${pageTitle} | ${pageDescription}`;
  }, [pageTitle, pageDescription]);

  return (
    <div className="page-layout flex flex-col h-screen">
      <header className="flex items-center px-7 md:px-[3%] lg:px-[5%] pt-[20px] pb-[12px] border-b border-[#EFF1FF] bg-white z-[11] sticky top-0">
        <div className="page-info">
          <h3 className="text-xl font-black text-primary">{pageTitle}</h3>
          <p className="text-xs text-[#979797]">{pageDescription}</p>
        </div>

        <div className="date items-center gap-1 text-[13px] text-[#979797] ml-auto hidden md:flex">
          <Icon icon="mdi:calendar-month-outline" />
          <span>{formatDate(new Date())}</span>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 overflow-y-auto px-7 md:px-[3%] bg-gray-50 lg:px-[5%] py-[22px] relative"
      >
        {children}
      </motion.section>
    </div>
  );
};

export default PageLayout;
