import { Link } from "react-router-dom";

const Wgt_Depotwise_Ui = ({ data }) => {
  return (
    <>  

         <tr>   
            <th> 
            <Link className="link  w3-text-indigo" to={`/Statewise/${data.id}`}>  {data.depot} </Link> 
            <br />
            <span className="w3-small w3-text-gray" > 
            Territories .({data.territorys})
            Dealers .({data.dealers}) 
            </span> 
            </th> 

              <td>{data.ly} L </td> 

                   <td> 
                   <i className="fa fa-gear" > </i> 
                   {data.wt}</td>

             <td> <input className="" value={data.target} />  L <i className="w3-text-gray">({data.target_percentage}%)</i></td> 

            <td> {data.achieved} L 
            <i className="w3-text-gray">({data.achieved_percentage}%)</i>
            </td>  
          </tr> 

    </>
  );
};


export default Wgt_Depotwise_Ui;