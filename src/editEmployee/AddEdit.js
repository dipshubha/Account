import React, { useState, useEffect } from 'react'

import { BsCheck, BsTrashFill, BsPencilSquare, BsPlus } from "react-icons/bs";

const getLocalItem = () => {
    const list1 = localStorage.getItem("list1")
    const list2 = localStorage.getItem("list2")
    const list3 = localStorage.getItem("list3")
    if (list1 && list2 && list3) {
        return (JSON.parse(localStorage.getItem("list1", "list2", "list3")))
    } else {
        return []
    }
}

const Todo = () => {
    const [inputData1, setInputData1] = useState("")
    const [inputData2, setInputData2] = useState("")
    const [inputData3, setInputData3] = useState("")

    const [item1, setItem1] = useState(getLocalItem())
    const [item2, setItem2] = useState(getLocalItem())
    const [item3, setItem3] = useState(getLocalItem())

    const [update, setUpdate] = useState(null)
    const [tog, setTog] = useState(true)

    // console.log(inputData1)
    // console.log(inputData2)
    // console.log(inputData3)

    const addItem = () => {
        if (!inputData1 && !inputData2 && !inputData3) {
            alert("Enter Fill  The Data")
        }
        else if (inputData1 && !tog) {
            setItem1(
                item1.map((ele) => {
                    if (ele.id === update) {
                        return { ...ele, name: inputData1 }
                    }
                    return ele;
                })
            )
            setItem2(
                item2.map((ele) => {
                    if (ele.id === update) {
                        return { ...ele, name: inputData2 }
                    }
                    return ele;
                })
            )
            setItem3(
                item3.map((ele) => {
                    if (ele.id === update) {
                        return { ...ele, name: inputData3 }
                    }
                    return ele;
                })
            )
            setInputData1("")
            setInputData2("")
            setInputData3("")

            setUpdate(null)
            setTog(true)

        }
        else {
            const alldata1 = { id: new Date().getTime().toString(), name: inputData1 }
            const alldata2 = { id: new Date().getTime().toString(), name: inputData2 }
            const alldata3 = { id: new Date().getTime().toString(), name: inputData3 }
            setItem1([...item1, alldata1])
            setItem2([...item2, alldata2])
            setItem3([...item3, alldata3])
            setInputData1("")
            setInputData2("")
            setInputData3("")
        }

    }
    // console.log(item1)
    // console.log(item2)
    // console.log(item3)

    const edititem = (id) => {
        const newedit1 = item1.find((ele) => {
            return ele.id === id
        })
        const newedit2 = item2.find((ele) => {
            return ele.id === id
        })
        const newedit3 = item3.find((ele) => {
            return ele.id === id
        })

        //console.log(newedit1)
        setInputData1(newedit1.name)
        setInputData2(newedit2.name)
        setInputData3(newedit3.name)

        setUpdate(id)
        setTog(false)

    }


    const deletitem = (index) => {
        const del = item1.filter((ele) => {
            return index !== ele.id
        })
        setItem1(del)
        setItem2(del)
        setItem3(del)
    }
    useEffect(() => {
        localStorage.setItem("list1", JSON.stringify(item1))
        localStorage.setItem("list2", JSON.stringify(item2))
        localStorage.setItem("list3", JSON.stringify(item3))

    }, [item1, item2, item3]);

    const input = {
        width:" 100 %",
        background: "#F0F0CB",
        color: "black",
        padding: "14px 20px",
         margin: "20px 3px",
         border: "2px",
         
        borderRadius: "12px",
        cursor: "pointer",
}
return (

        <div className="container" >
            <div className="sub_main">
                <h1 style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem",fontFamily: "Arial, Helvetica, sans-serif " }}>Edit Employee</h1>
            </div>
            <div className="">
                <label>Enter User Name</label>
                <input style={input} type="text" placeholder="Enter User Name" value={inputData1} onChange={(e) => setInputData1(e.target.value)} />
                <label >Enter Full Name</label>
                <input style={input} type="text" placeholder="Enter Full Name" value={inputData2} onChange={(e) => setInputData2(e.target.value)} />
                <label>Enter Company</label>
                <input style={input} type="text" placeholder="Enter Company" value={inputData3} onChange={(e) => setInputData3(e.target.value)} />
                {
                    tog ? <BsPlus onClick={addItem} size="40px"/> : <BsPencilSquare onClick={addItem} size="20px" title="Update Data" />
                }

            </div>
            <div>
                <div className="show_item">
                    <table className="table">
                        <thead>
                            <tr className="table-danger">

                                <th scope="col">User Name </th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >

                                <td>{
                                    item1.map((e) => {
                                        return (
                                            <div className="each_item" key={e.id}>
                                                <h5>{e.name}</h5>


                                            </div>
                                        )
                                    })
                                }</td>
                                <td>{
                                    item2.map((e) => {
                                        return (
                                            <div className="each_item" key={e.id}>
                                                <h5>{e.name}</h5>

                                            </div>
                                        )
                                    })
                                }</td>
                                <td>{
                                    item3.map((e) => {
                                        return (
                                            <div className="each_item" key={e.id}>
                                                <h5>{e.name}</h5>
                                                <BsPencilSquare onClick={() => edititem(e.id)} size="20px" />
                                                <BsTrashFill onClick={() => deletitem(e.id)} size="20px" />
                                            </div>
                                        )
                                    })
                                }   </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    
)
}

export default Todo
