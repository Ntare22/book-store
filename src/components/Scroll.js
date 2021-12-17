const Scroll = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <div className="scroll">
      {children}
    </div>
  );
};

export default Scroll;
