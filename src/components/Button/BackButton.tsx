import { Link } from "react-router-dom";

interface Props {
  link: string;
}
const BackButton = ({ link }: Props) => {
  return (
    <Link
      to={link}
      className="bg-neutral-900 w-60 rounded-lg text-white py-3 shadow shadow-zinc-900 text-center"
    >
      Back
    </Link>
  );
};

export default BackButton;
