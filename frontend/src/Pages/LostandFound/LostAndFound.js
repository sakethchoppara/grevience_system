import React from "react";
import "./LostAndFound.css";
import {Link} from "react-router-dom"

const LostAndFound = ()=>{
    return(
        <div className="lf">
            <div className="home-title">
                <div className="home-title-logo"></div>
                <label>Vasireddy Venkatadri Institute of Technology</label>
                <div className="home-title-dd">
                    <button>Need Help ?</button>
                </div>
            </div>
            <div className="lf-body">
                <div className="lf-body-title">
                    <label>Welcome To Lost and Found</label>
                </div>
                <div className="lf-desc">
                    <label>Lost or Found an item Dont worry !! report it here and we will make sure the every thing goes to its rightful owner</label>
                </div>
                <div className="lf-opt-container">
                    <div className="lf-options">
                        <div className="lf-lost">
                            <Link to="/lostNfound/lost" >Lost an Item ?</Link>
                        </div>
                        <div className="lf-found">
                            <Link to="/lostNfound/found" >Found An Item ?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LostAndFound