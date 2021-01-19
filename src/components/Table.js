import react from 'react'
const Table=(props)=>{
    let users=props.data
    return(
        
        <div>
            <table className="styled-table">
                <tr>
                    <th>Name</th>
                    <th>Place</th>
                </tr>
                <tbody>
                    {
                        Object.values(users).map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.place}</td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
                {console.log("dd"+users)}
                
              
            </table>
        </div>
    )
}
export default Table