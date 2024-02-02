const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 text-white px-5 py-2.5 mb-2 my-4 rounded-lg font-medium"
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
