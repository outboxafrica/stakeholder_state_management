import React from 'react'
import "./Navigation.css"
import {Link} from "react-router-dom"


export default function NavigationLink({navLinkName, link}) {
    return (
        <Link to={link} className="nav__optionLink">{navLinkName}</Link>
    )
}
