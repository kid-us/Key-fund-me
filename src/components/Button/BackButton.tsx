import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
}
const BackButton = ({ link }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="bg-neutral-900 w-60 rounded-lg text-white py-3 shadow shadow-zinc-900 text-center"
    >
      Back
    </button>
  );
};

export default BackButton;
