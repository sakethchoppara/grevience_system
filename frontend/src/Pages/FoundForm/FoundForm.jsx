import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoundForm.css"

const FoundForm = () => {
    const navigate = useNavigate();
    const [Name,setName] = useState(null);
    const [Email,setEmail] = useState(null);
    const [Contact,setContact] = useState(null);
    const [ItemName,setItemName] = useState(null);
    const [ItemType,setItemType] = useState(null);
    const [Keywords,setKeywords] = useState(null);
    const [Location,setLocation] = useState(null);
    const [Time,setTime] = useState(null);
    const [Date,setDate] = useState(null);
    const [Image,setImage] = useState(null);
    const [Desc,setDesc] = useState(null);
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
    const handleImage = (event)=> {
        setImage(event.target.files[0])
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
        fetch('http://localhost:8000/lostandfound/found',{
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
            <div className="found-f">
                 <div className="home-title">
                <div className="home-title-logo"></div>
                <label>Vasireddy Venkatadri Institute of Technology</label>
                <div className="home-title-dd">
                    <button>Need Help ?</button>
                </div>
            </div>
                <div className="found-f-body">
                    <div className="found-f-container">
                        <div className="found-form">
                            <div className="found-f-name f-f">
                                <label htmlFor="name" className="found-f-name-label fflabel">Name:</label>
                                <input type="text" id="name" name="name" required className="found-f-name-in fflin" onChange={handleName} />
                            </div>
                            <div className="found-f-email f-f">
                                <label htmlFor="email" className="found-f-email-label fflabel">Email:</label>
                                <input type="email" id="email" name="email" required className="found-f-name-in fflin" onChange={handleEmail} />
                            </div>
                            <div className="found-f-contact f-f">
                                <label htmlFor="contact" className="found-f-contact-label fflabel">Contact:</label>
                                <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" required className="found-f-contact-in fflin" onChange={handleContact} />
                            </div>
                            <div className="found-f-itemName f-f">
                                <label htmlFor="itemName" className="found-f-itemName-label fflabel" >Item Name:</label>
                                <input type="text" id="itemName" name="itemName" required className="found-f-itemName fflin" onChange={handleItemname} />
                            </div>
                            <div className="found-f-itemType f-f">
                                <label htmlFor="itemType" className="found-f-itemType fflabel" >Item Type:</label>
                                <input type="text" id="itemType" name="itemType" required className="found-f-itemType-in fflin" onChange={handleItemType} />
                            </div>
                            <div className="found-f-keywords f-f">
                                <label htmlFor="keywords" className="found-f-keywords fflabel">Keywords:</label>
                                <input type="text" id="keywords" name="keywords" className="found-f-keyword-in fflin" onChange={handleKeywords} />
                            </div>
                            <div className="found-f-location f-f">
                                <label htmlFor="location" className="found-f-location-label fflabel" >Location:</label>
                                <input type="text" id="location" name="location" className="found-f-location-in fflin" onChange={handleLocation} />
                            </div>
                            <div className="found-f-time f-f">
                                <label htmlFor="time" className="found-f-time-label fflabel" >Time:</label>
                                <input type="time" id="time" name="time" className="found-f-time-in fflin" onChange={handleTime} />
                            </div>
                            <div className="found-f-date f-f">
                                <label htmlFor="date" className="found-f-date-label fflabel" >Date:</label>
                                <input type="date" id="date" name="date" className="found-f-date-in fflin" onChange={handleDate} />
                            </div>
                            <div className="found-f-image f-f" >
                                <label htmlFor="image" className="found-f-image-label fflabel">Image:</label>
                                <input type="file" id="image" name="image" className="found-f-image-in fflin" onChange={handleImage} />
                            </div>
                            <div className="found-f-desc f-f" >
                                <label htmlFor="description" className="found-f-desc-label fflabel" >Description:</label>
                                <textarea id="description" name="description" rows="4" cols="50" required className="found-f-desc-in fflin"onChange={handleDesc}  ></textarea>
                            </div>
                            <div className="found-f-submit f-f">
                                <button className="found-f-submit-in fflin" onClick={handleSubmit} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default FoundForm