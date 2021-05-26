import React,{Component} from "react"

const ShowData = (props) => {
    const result = props.data.map((data,index) => {
        if(data != ''){
            if(String(data).includes("http")){
                return <a key={index} href={data}>{data}</a>
            }
            return <p>{data}</p>
        }
    })

    return(
        <div>{result}</div>        
    )
}

export default ShowData;