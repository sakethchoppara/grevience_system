import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import "./Homepage.css";
import Swal from "sweetalert2";

const Homepage =()=> {
    const formData = new FormData()
    const [Name,setName] = useState(null);
    const [Registration,setRegistration] = useState(null);
    const [Email,setEmail] = useState(null);
    const [Desig,setDesig] = useState(null);
    const [Department,setDepartment] = useState(null);
    const [Year,setYear] = useState(null);
    const [Type,setType] = useState(null);
    const [Grevience,setGrevience] = useState(null);

    const handleName = (e) =>{
        setName(e.target.value)
    } 
    const handleRegistration = (e) => {
        setRegistration(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleDesig = (e) =>{
        setDesig(e.target.value)
    }
    const handleDepartment = (e) =>{
        setDepartment(e.target.value)
    }
    const handleYear = (e) =>{
        setYear(e.target.value)
    }
    const handleType = (e) =>{
        setType(e.target.value)
    }
    const handleGrevience =(e) =>{
        setGrevience(e.target.value)
    }



    const clicked = ()=>{
        if(document.getElementById("nav-container").style.width === "12%"){
            document.getElementById("nav-container").style.width = "5%";
            document.getElementById("sidenav").style.display = "none";
            document.getElementById("open-close-btn").style.marginRight="auto";
        }
        else{
            document.getElementById("nav-container").style.width = "12%"
            document.getElementById("sidenav").style.display="";
            document.getElementById("open-close-btn").style.marginRight = "10px"
        }
    }

    const update = () =>{
        formData.append('name',Name)
        formData.append('registration',Registration)
        formData.append('email',Email)
        formData.append('desig',Desig)
        formData.append('department',Department)
        formData.append('year',Year)
        formData.append('type',Type)
        formData.append('grevience',Grevience)
        fetch('http://localhost:8000/response/',{
            method:"POST",
            body : formData,
            headers:{
                'Content-type':'application/json'
            }
        }
        ).then(res => res.json())
        .then(res=>console.log(res))
        .then(() => {
            let timerInterval
            Swal.fire({
              title: 'Success',
              html: 'Successfully Submitted.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
        })
        .catch((error)=>{
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
        });
    }

    return(
        <div className="home">
            <div className="home-title">
                <div className="home-title-logo"></div>
                <label>Vasireddy Venkatadri Institute of Technology</label>
                <div className="home-title-dd">
                    <button>Need Help ?</button>
                </div>
            </div>
            <div className="home-body">
                <div className="nav-container" id="nav-container">
                   <div className="open-close-btn" id="open-close-btn" onClick={clicked}></div>
                   <div id="sidenav" className="sidenav" style={{display:"none"}}>
                        <label href="#">Home</label>
                        <label href="#">Academics</label>
                        <label href="#">Placement</label>
                        <label href="#">Facilities</label>
                        <label href="#">About Us</label>        
                        <label ><Link to="/lostNfound" style={{'color':'white'}}>Lost and Found</Link></label>
                    </div>
                </div>
                <div className="form-container">
                    <h3>Grevience Form</h3>
                    <div className="g-form-container">
                            <div className="g-form-name g-form-e">
                                <label className="l label-name g-form-name-l">Full Name of The Complaintant(student or faculty)</label>
                                <input type="text" className="g-form-name-in in input-name input" id="input-name" onChange={handleName} />
                            </div>
                            <div className="g-form-reg g-form-e">
                                <label className="l label-reg g-form-reg-l">Registration Number</label>
                                <input type="text" className="g-form-reg-in in input-reg input" id="input-reg" onChange={handleRegistration} />
                            </div>
                            <div className="g-form-email g-form-e">
                                <label className="g-form-email-l l label-email">Email</label>
                                <input type="email" className="g-form-email-in in input-email input" id="input-email" onChange={handleEmail} />
                            </div>
                            <div className="g-form-who g-form-e">
                                <label className="g-form-who-l l label-who">Who are you ?</label>
                                <div className="g-form-who-opt">
                                    <div>
                                        <input type="radio" value="Student" id="whoareyou" name="who" onChange={handleDesig} />
                                        <label>Student</label>
                                    </div>
                                    <div>
                                        <input type="radio" value="Faculty" id="whoareyou" name="who" onChange={handleDesig} />
                                        <label>Faculty</label>  
                                    </div>
                                </div>
                            </div>
                            <div className="g-form-dept g-form-e">
                                <label className="g-form-dept-l l label-dept">Department</label>
                                <select name="dept" className="in" id="dept-input" onChange={handleDepartment} >
                                    <option value="CSE">CSE</option>
                                    <option value="CSM">CSM</option>
                                    <option value="CIC">CIC</option>
                                    <option value="CSO">CSO</option>
                                    <option value="IT">IT</option>
                                    <option value="MECH">MECH</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="AIML">AIML</option>
                                    <option value="EEE">EEE</option>
                                    <option value="ECE">ECE</option>
                                    <option value="AIDS">AIDS</option>

                                </select>
                            </div>
                            <div className="g-form-year g-form-e">
                                <label className="g-form-year-l l label-year">Year</label>
                                <select name="year" id="year" className="in" onChange={handleYear} >
                                    <option value="1">1st year</option>
                                    <option value="2">2nd year</option>
                                    <option value="3">3rd year</option>
                                    <option value="4">4th year</option>
                                </select>
                            </div>
                            <div className="g-form-g g-form-e">
                                <label className="g-form-g-l l label-g">Type of Grevience</label>
                                <select name="g" id="type" className="in" onChange={handleType} >
                                    <option value="Academic">Academic</option>
                                    <option value="Non-Academic">Non-Academic</option>
                                    <option value="Discrimination">Discrimination</option>
                                </select>
                            </div>
                            <div className="g-form-form g-form-e">
                                <label className="g-form-type label-type l">Grevience column</label>
                                <textarea placeholder="enter your complaints" className="input-textarea in" id="comp-input" style={{resize:"none"}} onChange={handleGrevience} >

                                </textarea>
                            </div>
                            <div className="g-form-submit g-form-e">
                                <input className="g-form-sub-in in input-submit" type="submit" value="Submit" onClick={update}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
   }

export default Homepage