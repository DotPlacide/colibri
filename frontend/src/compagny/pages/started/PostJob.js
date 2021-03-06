import React from 'react'
import CompanyNav from "../../components/Dashboard/Nav/CompanyNav";
import BoxPost from "../../components/ContentPost/BoxPost";
import './post.css'
import ProgressNav from "../../components/ProgressNav";
const Post = () => {
    return(
        <div className="bg-post">
            <CompanyNav/>
            <div className="container">
                <ProgressNav/>
                <div>
                    <BoxPost/>
                </div>
            </div>
        </div>

    )
}
export default Post