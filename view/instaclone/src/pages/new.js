import React, { Component } from 'react'
import "./new.css"
import api from "../services/api"

class New extends Component{
    constructor(props){
        super(props);
        this.state = {
            author:"",
            place: "",
            description: "",
            hashtags: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleImageChange(e){
        this.setState({
            image:e.target.files[0]
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        data.append("image", this.state.image);
        data.append("author", this.state.author);
        data.append("place", this.state.place);
        data.append("description", this.state.description);
        data.append("hashtags", this.state.hashtags);
        await api.post('posts', data);
        this.props.history.push("/")
        console.log(this.state)
    }
    render(){
        return (
            <div className="New">
                <h1>Create new post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input id="image" onChange={this.handleImageChange} type="file"/>
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input 
                        id="author"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="place">Place: </label>                   
                        <input 
                        id="place"
                        type="text"
                        name="place"
                        value={this.state.place}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input 
                        id="description"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="hashtags">Hashtags: </label>
                        <input 
                        id="hashtags"
                        type="text"
                        name="hashtags"
                        value={this.state.hashtags}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>  
        )
    }
}

export default New