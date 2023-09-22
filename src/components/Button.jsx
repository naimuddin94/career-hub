const Button = ({ children }) => {
  return (
    <button className="btn btn-active normal-case bg-blue-300">
      {children}
    </button>
  );
};

export default Button;
