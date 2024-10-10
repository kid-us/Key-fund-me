interface ParentProps {
  component: React.ComponentType;
}

const Create = ({ component: Component }: ParentProps) => {
  return (
    <div className="bg-gray-100 h-[100dvh]">
      <div className="grid grid-cols-7 gap-x-10">
        <Component />
      </div>
    </div>
  );
};

export default Create;
