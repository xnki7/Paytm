const Balance = ({value}) => {
  return (
    <div className="flex h-14 items-center">
      <div className="font-bold pl-8">
        Your Balance
      </div>
      <div className="ml-2 font-semibold">
      ₹ {value}
      </div>
    </div>
  )
}

export default Balance
