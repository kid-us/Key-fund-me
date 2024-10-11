import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  start: number;
  link: string;
}

const Alert = ({ start, link }: Props) => {
  const [count, setCount] = useState(start);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      navigate(link);
    }
  }, [count]);

  return (
    <div className="fixed lg:right-10 right-0 lg:top-10 top-20 z-10">
      <p className="bg-yellow-300 p-4 rounded-xl lg:text-sm text-xs lg:mx-0 mx-2 shadow">
        <span className="bi-shield-fill-exclamation me-3 text-red-600"></span>
        You haven't filled out the previous form. We will redirect you back to
        complete it.
        <span className="ms-3 bg-white rounded-full py-[2px] px-2 shadow">
          {count}
        </span>
      </p>
    </div>
  );
};

export default Alert;
