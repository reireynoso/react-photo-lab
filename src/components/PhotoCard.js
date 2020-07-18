import React from 'react'

const PhotoCard = (props) => {
    const {author, download_url} = props.photo
    const checkWhereItsComingFrom = () => {
        if(props.photoContainer){
            if(props.favorites.includes(props.photo)){
                return <button disabled className="ui button blue">Already in Favorites</button>
            }
            else{
                return <button onClick={() => props.handleAddToFavs(props.photo)} className="ui button blue">Add To Favorites</button>
            }
        }
        else if(props.favoritesContainer){
            return <button onClick={() => props.handleRemoveFavs(props.photo)} className="ui button red">Remove</button>
        }
    }
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img alt={download_url} src={download_url}/>
                </div>
                <div className="content">
                    <div className="header">{author}</div>
                    {
                        checkWhereItsComingFrom()
                    }           
                </div>
            </div>
        </div>
    )
}

export default PhotoCard