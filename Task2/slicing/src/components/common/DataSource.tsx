import React from "react"

type Props = {
    image: string
   
}
const DataSource: React.FC<Props> = ({image}) => {
  return (
    <div className="">
        <img className="" src={image} alt="" />
    </div>
  )
}

export default DataSource