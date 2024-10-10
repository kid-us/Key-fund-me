import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; // Defines the type for the children prop
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="col-span-5 bg-white p-10 h-[100dvh] rounded-l-[50px] shadow">
      <div className="flex items-center h-full">
        {children} {/* Render the passed children here */}
      </div>
    </div>
  );
};

export default Wrapper;
