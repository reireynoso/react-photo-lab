import React from 'react'

const Header = () => {
    return(
        <div style={{backgroundColor: "black"}}>
            <div class="ui inverted segment" >
                <div class="ui inverted secondary pointing menu">
                    <div className="ui inverted button">
                        All Photos
                    </div>
                    <div className="ui inverted button">
                        Favorites
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header