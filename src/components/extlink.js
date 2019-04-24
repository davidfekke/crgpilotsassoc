import React from "react"

export default props => {
    return (
        <a href={ props.uri } target="_blank" rel="noopener noreferrer" style={props.style}>{props.name}</a>
    )
}
