const Button = ({
    value='',
    className=''
}) => {
  return (
    <button className={`px-2 py-1  outline-none rounded-md ${className}`}>{value}</button>
  )
}

export default Button