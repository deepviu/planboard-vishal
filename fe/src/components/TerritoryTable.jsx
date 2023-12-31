import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const TerritoryTable = () => {


    const [terriotryData,setTerriotryData] = useState([])


    const fetchapi = async() => {
       const response = await axios.get(`http://localhost:5500/api/get-terriotry`)

       const newData = response.data;
       setTerriotryData(newData)

    }


    useEffect(()=>{

        fetchapi()

    },[])
    return (
        <div>
            <table className="w3-table table-bordered "  >
                <thead>
                    <tr>
                        <th> Territory</th>
                        <th>LY <br /> FY 22-23 </th>
                        <th> Weightage <br /> FY 23-24  </th>
                        <th> Target (%)  <br /> FY 23-24 </th>
                        <th> YTD (%) <br /> August  </th>

                    </tr>
                </thead>
                <tbody>

                    {terriotryData.map((data) => (
                        <>


                            <tr>
                                <th>
                                    <Link className="link  w3-text-indigo" to={`/Statewise/${data.id}`}>  {data.depot} </Link>
                                    <br />
                                    <span className="w3-small h6 w3-text-gray" >
                                        Dealers .({data.dealers})
                                    </span>
                                </th>

                                <td>{data.ly} L </td>

                                <td>
                                    <i className="fa fa-gear" > </i>
                                    {data.wt}</td>

                                <td> <input className="" value={data.target} />  L <i className="w3-text-gray">({data.target_percentage}%)</i></td>


                                <td> {data.achieved} L <i className="w3-text-gray">({data.achieved_percentage}%)</i> </td>
                            </tr>
                        </>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TerritoryTable