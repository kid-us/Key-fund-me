interface ParentProps {
  component: React.ComponentType;
}

const Create = ({ component: Component }: ParentProps) => {
  return (
    <div className="bg-gray-100 h-[100dvh]">
      <div className="lg:grid grid-cols-9 gap-x-10">
        <Component />
      </div>
    </div>
  );
};

export default Create;
