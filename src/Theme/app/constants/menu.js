import {
  faBolt,
  faChalkboardTeacher,
  faHouseUser,
  faPuzzlePiece,
  faStore,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SideBareItem from "../layouts/sidebare-item";

class MenuItemData {
  constructor(icon = "", page = "", path = "") {
    this.icon = icon;
    this.page = page;
    this.path = path;
  }
}

const MENU_DATA = [
  new MenuItemData(faHouseUser, "Dashboard", "/dashboard"),
  new MenuItemData(faBolt, "Checkpoints", "/checkpoints"),
  new MenuItemData(faPuzzlePiece, "Projects", "/projects"),
  new MenuItemData(faChalkboardTeacher, "Interview", "/interview"),
  new MenuItemData(faUserGraduate, "Student", "/students"),
  new MenuItemData(faStore, "Store", "/store"),
];

const Menu = ({ setPage }) => {
  return (
    <ul>
      {MENU_DATA.map((mid, index) => (
        <SideBareItem key={index} data={mid} setPage={setPage} />
      ))}
    </ul>
  );
};

export default Menu;
