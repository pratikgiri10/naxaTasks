import React from "react"

type Props = {
    image: string
    title: string[]
    // title1: string,
    // title2: string,
    // props: String
}
const DataSource: React.FC<Props> = ({image, title}) => {
  return (
    <div className="flex items-center gap-2">
        <img className="w-12" src={image} alt="" />
        <div>
            {title.map((title, index) => (
                <h1 key={index} className={`${index==0? 'text-sm': 'text-md'} font-semibold`}>{title}</h1>
            ) )}
            {/* <h1>{title1}</h1>
            <h1>{title2}</h1> */}
        </div>
    </div>
  )
}

export default DataSource