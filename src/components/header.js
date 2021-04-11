import React from "react"
import Container from "./container.js"
import Logo from "./capa.logo.svg"
import * as headerStyles from "./header.module.css"

export default props => {
    return (
        <header className={headerStyles.back}>
            <Container>
                <img src={Logo} alt="Logo" className={headerStyles.logo} />
                {/* <h1 className={headerStyles.myheadline}>{props.headline}</h1> */}
            </Container>
        </header>
    )
}
