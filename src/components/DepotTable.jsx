import React from 'react'
import { Link } from "react-router-dom"

const DepotTable = ({ tableData }) => {
    return (
        <div>
            <table className="w3-table table-bordered "  >
                <thead>
                    <tr>
                        <th> Depot  <br />
                            <i className="w3-text-gray"> Trt.(6) , Dlr.(234) </i>
                        </th>
                        <th>LY <br /> FY 22-23 </th>
                        <th> Weightage <br /> FY 23-24  </th>
                        <th> Target (%)  <br /> FY 23-24 </th>
                        <th> YTD (%) <br /> August  </th>
                    </tr>
                </thead>
                <tbody>

                    {tableData.map((data) => (
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
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default DepotTable