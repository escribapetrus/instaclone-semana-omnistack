import React, { Component } from 'react'
import "./feed.css"
import api from "../services/api"
import Post from "./post"
import io from "socket.io-client"

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed: [],
        }
        this.like = this.like.bind(this)
    }
    async componentDidMount(){
        this.registerToSocket();
        const response = await api.get("posts");
         this.setState({feed: response.data})
    }
   registerToSocket(){
       const socket = io("http://localhost:3334");
       socket.on("post", newPost=>{
           this.setState({
               feed: [newPost, ...this.state.feed]
           });
       })
       socket.on("like", newLike=>{
           this.setState({
               feed: this.state.feed.map(post=>
                    post._id===newLike._id ? newLike : post
                )
           })
       })
   }
   like(lu){
        api.post(`/posts/${lu}/like`)
    }

    render(){
        return (
            <section className="Feed">
                {this.state.feed.map((p) => {
                    var img = `http://localhost:3334/files/${p.image}`
                    return <Post 
                        key={p._id}
                        id={p._id}
                        author={p.author}
                        place={p.place}
                        image={img}
                        likes={p.likes}
                        description={p.description}
                        hashtags={p.hashtags}
                        like={this.like}
                        />
                })}
            </section>
        )
    }
}

export default Feed