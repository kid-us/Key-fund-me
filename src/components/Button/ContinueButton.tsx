import Loader from "../Loader/Loader";

interface Props {
  loader: boolean;
  onClick?: () => void;
}
const Button = ({ loader, onClick }: Props) => {
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <button
          onClick={onClick}
          className="bg-primary w-60 rounded-lg text-white py-3 shadow shadow-zinc-900"
        >
          Continue
        </button>
      )}
    </>
  );
};

export default Button;
