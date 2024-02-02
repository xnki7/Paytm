const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <div className="">
      <p className="text-left text-sm font-medium my-1">{label}</p>
      <input
        type="text"
        className="w-full px-2 py-1 border rounded border-slate-200"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
