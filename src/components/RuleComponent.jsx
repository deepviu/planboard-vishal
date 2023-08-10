import React from 'react'



const RuleComponent = ({ tableHeader, tableData }) => {



    return (
        <div>
            <table className="w3-table table-bordered "  >
                <thead>
                    <tr>

                        {
                            tableHeader.map((item) => (
                                <>

                                    <th>{item.name}</th>
                                </>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>

                    {tableData.map((item) => (
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