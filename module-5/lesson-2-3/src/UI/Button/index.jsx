import "./index.scss";

const index = props => {
    console.log(props)

    return (
        <>
        
            <button className="btn" style={{backgroundColor:`${props.bg}`}}>
                {props.title}
            </button>
        
        </>
    )
}

export default index;