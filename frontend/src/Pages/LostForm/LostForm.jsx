import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LostForm.css"



const LostForm = () => {
    const navigate = useNavigate();
    const [Image,setImage] = useState(null);
    const [Name,setName] = useState(null);
    const [Email,setEmail] = useState(null);
    const [Contact,setContact] = useState(null);
    const [ItemName,setItemName] = useState(null);
    const [ItemType,setItemType] = useState(null);
    const [Keywords,setKeywords] = useState(null);
    const [Location,setLocation] = useState(null);
    const [Time,setTime] = useState(null);
    const [Date,setDate] = useState(null);
    const [Desc,setDesc] = useState(null);
    const handleImage = (event)=> {
        setImage(event.target.files[0])
    }   
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleContact = (e)=>{
        setContact(e.target.value)
    }
    const handleItemname = (e)=>{
        setItemName(e.target.value)
    }
    const handleItemType = (e)=>{
        setItemType(e.target.value)
    }
    const handleKeywords = (e)=>{
        setKeywords(e.target.value)
    }
    const handleLocation = (e)=>{
        setLocation(e.target.value)
    }
    const handleTime = (e)=>{
        setTime(e.target.value)
    }
    const handleDate = (e)=>{
        setDate(e.target.value)
    }
    const handleDesc = (e)=>{
        setDesc(e.target.value)
    }
    const handleSubmit = (e)=>{
        const formData = new FormData();
        formData.append('name',Name)
        formData.append('email',Email)
        formData.append('contact',Contact)
        formData.append('itemName',ItemName)
        formData.append('itemType',ItemType)
        formData.append('keywords',Keywords)
        formData.append('location',Location)
        formData.append('time',Time)
        formData.append('date',Date)
        formData.append('image',Image)
        formData.append('description',Desc)
        fetch('http://localhost:8000/lostandfound/lost',{
            method:'POST',
            body:formData,
        })
        .then(res => res.json())
        .then(data => {
            if (data.status){
                navigate(`/lostNfound/search/${data.id}`)
            }
        }
        )
    }
    return(
            <div className="lost-f">
                 <div className="home-title">
                <div className="home-title-logo"></div>
                <label>Vasireddy Venkatadri Institute of Technology</label>
                <div className="home-title-dd">
                    <button>Need Help ?</button>
                </div>
            </div>
                <div className="lost-f-body">
                    <div className="lost-f-container">
                        <div className="lost-form">
                            <div className="lost-f-name l-f">
                                <label htmlFor="name" className="lost-f-name-label lflabel">Name:</label>
                                <input type="text" id="name" name="name" required className="lost-f-name-in lfin" onChange={handleName} />
                            </div>
                            <div className="lost-f-email l-f">
                                <label htmlFor="email" className="lost-f-email-label lflabel">Email:</label>
                                <input type="email" id="email" name="email" required className="lost-f-name-in lfin" onChange={handleEmail} />
                            </div>
                            <div className="lost-f-contact l-f">
                                <label htmlFor="contact" className="lost-f-contact-label lflabel">Contact:</label>
                                <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" required className="lost-f-contact-in lfin" onChange={handleContact} />
                            </div>
                            <div className="lost-f-itemName l-f">
                                <label htmlFor="itemName" className="lost-f-itemName-label lflabel" >Item Name:</label>
                                <input type="text" id="itemName" name="itemName" required className="lost-f-itemName lfin" onChange={handleItemname} />
                            </div>
                            <div className="lost-f-itemType l-f">
                                <label htmlFor="itemType" className="lost-f-itemType lflabel" >Item Type:</label>
                                <input type="text" id="itemType" name="itemType" required className="lost-f-itemType-in lfin" onChange={handleItemType} />
                            </div>
                            <div className="lost-f-keywords l-f">
                                <label htmlFor="keywords" className="lost-f-keywords lflabel">Keywords:</label>
                                <input type="text" id="keywords" name="keywords" className="lost-f-keyword-in lfin" onChange={handleKeywords} />
                            </div>
                            <div className="lost-f-location l-f">
                                <label htmlFor="location" className="lost-f-location-label lflabel" >Location:</label>
                                <input type="text" id="location" name="location" className="lost-f-location-in lfin" onChange={handleLocation} />
                            </div>
                            <div className="lost-f-time l-f">
                                <label htmlFor="time" className="lost-f-time-label lflabel" >Time:</label>
                                <input type="time" id="time" name="time" className="lost-f-time-in lfin" onChange={handleTime} />
                            </div>
                            <div className="lost-f-date l-f">
                                <label htmlFor="date" className="lost-f-date-label lflabel" >Date:</label>
                                <input type="date" id="date" name="date" className="lost-f-date-in lfin" onChange={handleDate} />
                            </div>
                            <div className="lost-f-image l-f" >
                                <label htmlFor="image" className="lost-f-image-label lflabel">Image:</label>
                                <input type="file" id="image" name="image" className="lost-f-image-in lfin" onChange={handleImage} />
                            </div>
                            <div className="lost-f-desc l-f" >
                                <label htmlFor="description" className="lost-f-desc-label lflabel" >Description:</label>
                                <textarea id="description" name="description" rows="4" cols="50" required className="lost-f-desc-in lfin"onChange={handleDesc}  ></textarea>
                            </div>
                            <div className="lost-f-submit l-f">
                                <button className="lost-f-submit-in lfin" onClick={handleSubmit} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default LostForm