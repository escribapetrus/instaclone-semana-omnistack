import React, { Component } from 'react'
import "./post.css"
import more from "../assets/more.svg"
import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import send from "../assets/send.svg"

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleLike = this.handleLike.bind(this);
    }
    handleLike(){
        this.props.like(this.props.id);
    }
    
    render(){
        return (
            <div className="Post">
                <header className="Post-header">
                    <div className="Post-header-userinfo">
                        <span>{this.props.author}</span>
                        <span className="Post-header-userinfo-place">{this.props.place}</span>                     
                    </div> 
                    <img src={more} alt="more options"/>
                </header>
                <img className="Post-image" src={this.props.image} alt="this is a post"/>
                <footer className="Post-footer">
                    <div className="actions">
                        <button onClick={this.handleLike}>
                            <img src={like} alt="like"/>
                        </button>
                        <img src={comment} alt="comment"/>
                        <img src={send} alt="send"/>
                    </div>
                    <strong>{this.props.likes} likes</strong>
                    <p>
                        {this.props.description}
                        <span>{this.props.hashtags}</span>
                    </p>
                </footer>
            </div>            
        )
    }
}

export default Post