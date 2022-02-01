import React from 'react';
import SideBareItem from '../layouts/sidebare-item';


class MenuItemData {
    constructor(icon, page, path) {
        this.icon = icon
        this.page = page
        this.path = path
    }
}

const MENU_DATA = [
    new MenuItemData("fas fa-tachometer", "Dashboard", "/"),
    new MenuItemData("fas fa-bolt", "Checkpoints", "/checkpoints"),
    new MenuItemData("fas fa-puzzle-piece", "Projects", "/projects"),
    new MenuItemData("fas fa-chalkboard-teacher", "Interview", "/interview"),
    new MenuItemData("fas fa-user-graduate", "Student", "/students"),
    new MenuItemData("fas fa-store", "Store", "/store"),
]


const Menu = ({setPage}) => {

    return (<ul>{
        MENU_DATA.map(
            (mid, index) => <SideBareItem
                key={index}
                data={mid} 
                setPage={setPage}/>)}
    </ul>
    )
}


export default Menu;
