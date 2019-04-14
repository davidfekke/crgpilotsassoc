import React from "react"
import svglogo from "../../capa.logo.svg"

export default ({children}) => (
  <div style={{ color: `teal` }}>
    <h1>About Craig Pilots Association</h1>
    <img src={svglogo} alt="Craig Airport Pilots Association" />
    <div>
        {children}
    </div>
  </div>
)