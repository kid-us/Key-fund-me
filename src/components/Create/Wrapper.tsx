import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; // Defines the type for the children prop
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="col-span-6 bg-white lg:px-40 px-6 h-[100dvh] lg:rounded-l-[50px] shadow-lg">
      <div className="flex items-center h-full">
        {children} {/* Render the passed children here */}
      </div>
    </div>
  );
};

export default Wrapper;
