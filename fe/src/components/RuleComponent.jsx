import React,{useState,useEffect} from 'react'
import axios from "axios"



const RuleComponent = ({  tableData }) => {
    const [ruleData,setRuleData] = useState([])


    const fetchapi = async() => {
       const response = await axios.get(`http://localhost:5500/api/get-rule`)

       const newData = response.data;
       setRuleData(newData)

    }


    useEffect(()=>{

        fetchapi()

    },[])

    return (
        <div>
            <table className="w3-table table-bordered "  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rule / Condition</th>
                        <th>Weightage / 10</th>
                        <th>% Impact</th>
                        <th>% Impact</th>
                    </tr>
                </thead>
                <tbody>

                    {ruleData.map((item) => (
                        <>


                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>

                                <td>
                                    <input type="text" style={{ width: "90%" }} />


                                </td>
                                <td>
                                    {
                                        item.status ? (
                                            <>
                                            </>
                                        ) : (
                                            <input type="text" style={{ width: "90%" }} />
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.status ? (
                                            <>
                                            </>
                                        ) : (
                                            <input type="text" style={{ width: "90%" }} />
                                        )
                                    }
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

export default RuleComponent