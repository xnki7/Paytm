import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div className="">{label}</div>
      <Link to={to} className="pointer underline pl-1 ">{buttonText}</Link>
    </div>
  );
};

export default BottomWarning;
