import React, { useState, useEffect } from 'react'
import RJSlogo from '../assets/rjs-logo.png'
import { Link } from 'react-router-dom'
import { BsTrashFill, BsPencilSquare, BsPlus } from "react-icons/bs";

import { EditText, EditTextarea } from 'react-edit-text';


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
const EditEmp = () => {
    const [inputData1, setInputData1] = useState("")
    const [inputData2, setInputData2] = useState("")
    const [inputData3, setInputData3] = useState("")

    const [item1, setItem1] = useState(getLocalItem())
    const [item2, setItem2] = useState(getLocalItem())
    const [item3, setItem3] = useState(getLocalItem())

    // const [item11, setItem11] = useState(getLocalItem())
    // const [item22, setItem22] = useState(getLocalItem())
    // const [item33, setItem33] = useState(getLocalItem())

    const [update, setUpdate] = useState(null)
    const [tog, setTog] = useState(true)
    const [tog1, setTog1] = useState(true)

    // console.log(inputData1)
    // console.log(inputData2)
    // console.log(inputData3)
    const addItem = () => {
        if (!inputData1 && !inputData2 && !inputData3) {
            alert("Enter Fill  The Data")
        }
        // else if (inputData1 && !tog) {
        //     setItem1(
        //         item1.map((ele) => {
        //             if (ele.id === update) {
        //                 return { ...ele, name: inputData1 }
        //             }
        //             return ele;
        //         })
        //     )
        //     setItem2(
        //         item2.map((ele) => {
        //             if (ele.id === update) {
        //                 return { ...ele, name: inputData2 }
        //             }
        //             return ele;
        //         })
        //     )
        //     setItem3(
        //         item3.map((ele) => {
        //             if (ele.id === update) {
        //                 return { ...ele, name: inputData3 }
        //             }
        //             return ele;
        //         })
        //     )
        //     setInputData1("")
        //     setInputData2("")
        //     setInputData3("")

        //     setUpdate(null)
        //     setTog(true)

        // }
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

    const edititem = (event) => {
        console.log(event.target.id);
        let tem1 = item1.find((ele) => ele.id === event.target.id);
        tem1.name = event.target.value;
        // console.log(tem1);
        // const alldata1 = { id: event.target.id, name:event.target.value}
        setItem1(item1);
        console.log(item1);

        let tem2 = item2.find((ele) => ele.id === event.target.id);
        tem2.name = event.target.value;
        setItem1(item2);
        console.log(item2);

        let tem3 = item3.find((ele) => ele.id === event.target.id);
        tem3.name = event.target.value;
        setItem1(item3);
        console.log(item3);
        // const newedit1 = item1.find((ele) => {
        //     return ele.id === id
        // })
        // const newedit2 = item2.find((ele) => {
        //     return ele.id === id
        // })
        // const newedit3 = item3.find((ele) => {
        //     return ele.id === id
        // })

        //console.log(newedit1)
        // setInputData1(newedit1.name)
        // setInputData2(newedit2.name)
        // setInputData3(newedit3.name)
        // setItem1(newedit1.name)
        // setItem2(newedit2.name)
        // setItem3(newedit3.name)

        // setUpdate(id)
        // setTog(false)

    }


    const deletitem = (index) => {
        const del = item1.filter((ele) => {
            return index !== ele.id
        })
        setItem1(del)
        setItem2(del)
        setItem3(del)
    }
    // if (tog === true) {
    useEffect(() => {
        localStorage.setItem("list1", JSON.stringify(item1))
        localStorage.setItem("list2", JSON.stringify(item2))
        localStorage.setItem("list3", JSON.stringify(item3))

    }, [item1, item2, item3]);
    // } else {
    // useEffect(() => {
    //     localStorage.setItem("list1", JSON.stringify(item11))
    //     localStorage.setItem("list2", JSON.stringify(item22))
    //     localStorage.setItem("list3", JSON.stringify(item33))

    // }, [item11, item22, item33]);
    // }

    // const editFoc = () => {

    // }

    return (
        <div>
            <nav className="navbar navbar-expand-sm mt-2">
                <div className="container">
                    <a href="https://rjs.in" target="_blank" className="navbar-brand text-dark"><img src={RJSlogo} alt="RJS" width="25" className="mr-2" /> HDFC Statement Converter</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <div className="icon mt-1"></div>
                        <div className="icon my-1"></div>
                        <div className="icon my-1"></div>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav nav-pills ml-auto mt-2">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle pointer" data-toggle="dropdown">Settings</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item p-0 px-2 pointer" data-toggle="modal" data-target="#clearDataModal"></a>
                                    <Link to="/" style={{ paddingLeft: "15px" }}>Login</Link><br />
                                    <Link to="/edit" style={{ paddingLeft: "15px" }}>Edit</Link>  <br />
                                    <Link to="/update" style={{ paddingLeft: "15px" }}>Update</Link>



                                </div>
                            </li>
                            <li><a className="nav-item nav-link pointer" href="mailto:info@rjs.in" target="_blank" >Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" >

                <div style={{ marginTop: "50px" }}>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 mx-auto text-center">
                                <h5 className="mb-3">
                                    <strong >Edit Employee</strong>
                                </h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> User Name</th>
                                            <th> Full Name</th>
                                            <th> Company</th>
                                            <th></th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" value={inputData1} onChange={(e) => setInputData1(e.target.value)} /></td>
                                            <td><input type="text" value={inputData2} onChange={(e) => setInputData2(e.target.value)} /></td>
                                            <td><input type="text" value={inputData3} onChange={(e) => setInputData3(e.target.value)} style={{ marginLeft: "150px", marginRight: "100px" }} /> {
                                                tog ? <BsPlus onClick={addItem} size="40px" /> : <BsPencilSquare onClick={addItem} size="20px" title="Update Data" />
                                            }</td>

                                        </tr>
                                        {/* value print */}
                                        <tr>


                                            < td > {
                                                item1.map((e) => {
                                                    return (
                                                        <div className="each_item" key={e.id}>
                                                            
                                                            <input type="text" value={e.name} onChange={edititem} style={{ marginBottom: "20px" }} id={e.id} />


                                                        </div>

                                                    )
                                                })

                                            }</td>
                                            <td>{
                                                item2.map((e) => {
                                                    return (
                                                        <div className="each_item" key={e.id}>
                                                            <input value={e.name} onChange={edititem} style={{ marginBottom: "20px" }} id={e.id}/>

                                                        </div>
                                                    )
                                                })
                                            }</td>
                                            <td>{
                                                item3.map((e) => {
                                                    return (
                                                        <div className="each_item" key={e.id}>
                                                            <input value={e.name} onChange={edititem} style={{ marginLeft: "150px", marginRight: "115px", marginBottom: "20px" }}id={e.id} />
                                                            {/* <BsPencilSquare onClick={() => edititem(e.id)} size="20px" /> */}
                                                            <BsTrashFill onClick={() => deletitem(e.id)} size="20px" />

                                                        </div>
                                                    )
                                                })
                                            } </td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div >


        </div>
    )
}

export default EditEmp
