import React, { children } from 'react';
import "./SideBarOption.css";

function SidebarOption({  title, Icon})   {
    return (
        <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" fontSize='large'  sx={{paddingLeft: "10px", paddingRight:"10px"}}/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    )
}

export default SidebarOption;