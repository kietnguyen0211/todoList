export default function Footer(props){
    const btnList = [
        {
            id:1,
            name : "filter all",
            handleClick: () => props.fillAll()
        },
        {
            id:2,
            name:"Remove checked",
            handleClick: () => props.removeChecked()
        },
        {
            id:3,
            name:"filter checked",
            handleClick: () => props.fillChecked()
        },
        {
            id:4,
            name:"filter nochecked",
            handleClick: () => props.filterNochecked()
        },
    ]
    return(
        <div>
            {
                btnList.map((value,key)=>{
                    return(
                        <button 
                            key={key}
                            onClick={value.handleClick}
                        >{value.name}</button>
                    )
                })
            }
        </div>
    )
}