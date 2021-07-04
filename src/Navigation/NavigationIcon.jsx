import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationIcon({icon, link}) {
    return (
        <Link to="/checkout" class="material-icons">{icon}</Link>
    )
}
