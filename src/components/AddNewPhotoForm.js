import React, { Component } from 'react';

export default class AddNewPhotoForm extends Component {

    state = {
        author: "",
        download_url: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            author: "",
            download_url: ""
        })
    }

    render() {
        return (
            <div className="ui container custom-form">
            <form className="ui form" onSubmit={this.handleOnSubmit}>
                <div className="field">
                    <label>Author</label>
                    <input type="text" name="author" required onChange={this.handleOnChange} value={this.state.author} placeholder="Author"/>
                </div>

                <div className="field">
                    <label>Image URL</label>
                    <input type="text" name="download_url" required onChange={this.handleOnChange} value={this.state.download_url} placeholder="Photo URL"/>
                </div>
    
                <button className="ui button" type="submit">Submit</button>
            </form>  
        </div>
        );
    }
}
