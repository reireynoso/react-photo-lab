import React from 'react'

const Header = (props) => {
    return(
        <div style={{backgroundColor: "black"}}>
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <div onClick={() => props.handleViewSwitch("all")} className="ui inverted button">
                        All Photos
                    </div>
                    <div onClick={() => props.handleViewSwitch("favorites")}  className="ui inverted button">
                        Favorites
                    </div>
                    <div onClick={() => props.handleViewSwitch("add")}  className="ui inverted button">
                        Add New Photo
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header