import React from 'react'

const PhotoCard = () => {
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img alt="" src={"https://picsum.photos/id/0/5616/3744"}/>
                </div>
                <div className="content">
                    <div className="header">Elyse</div>
                    <button className="ui button blue">Add To Favorites</button>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard