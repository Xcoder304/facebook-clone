import React from "react";

// components/ Elements
import Avatar from "@mui/material/Avatar";
import { ContextVal } from "../../context/Context";

// style
import "../../styles/components/Sidebar.css";

const Sidebar = () => {
  const [{ user }, dispatch] = ContextVal();

  return (
    <div className="sidebar">
      <div className="sidebar__userProfile">
        <Avatar
          alt={user?.displayName}
          src={user?.photoURL}
          className="userProfile__img"
        ></Avatar>
        <span>{user?.displayName}</span>
      </div>

      <div className="sidebarOption__container">
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEs4d6DVCmiM6M5TO60-kxCqfpKmA4GtxSp-kqYDga3FEBAXfT0ljD-IkwVYC4nc82w-hHhTh5zB7ShUpQs2F3q"
          }
          Name={"Find Friends"}
        />

        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeH-PcwQ4P961AWGjdxah4O92NRDTXGHJ53Y1ENNcYcnnXr0sPb-Gf9c4qpHz18W9qsJOsi9w5AIdnud7toQr988"
          }
          Name={"Videos"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGD1Qje6mn1ZCLK4ixcpp-p-vsl1K9A-9v6-yXUr0D720puglRXTvZYVuZySz1AApYFc6SGbrPbdJ_LDnNqhXNC"
          }
          Name={"Market Place"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeHgP4caeBJZcUHGeVPKwlK8Z3xAUM5_bWpnfEBQzn9tau8Y8QHsHpiv_PjXb1ngZnqELwuujD3FIS4f4luFo8mp"
          }
          Name={"Groups"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeEbkDm5K1DYdJOsuYJhPODntEPFOzh_t-u0Q8U7OH-36yWBUnXx4ZBL-WuiLyIehXcHkCneUUB1t5JmNtCkOioM"
          }
          Name={"Pages"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png?_nc_eui2=AeF9_GXBJ5QRA4Y4joDLHuo3dpCQBhan_k52kJAGFqf-TraEDCy3QzmpC4Ie3EyXjp6RKTHtvPKnQBmh4d08OVAm"
          }
          Name={"Weather"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png?_nc_eui2=AeGZvrsuUSs4jAXSr1rej8tJk7y5SDbTwiqTvLlINtPCKkKAoMiytRIS3AI-yUec98dFZfAIDqKcdBkKqbvTIxf2"
          }
          Name={"Messenger Kids"}
        />
        <SideBarOption
          Icon={
            "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeGhvbdNncb-h8xdwEXuHhwD-5kYScafj0T7mRhJxp-PRID8BZJQBRdqVAJF6fs09kTgfknxPPlUOiobj8io8lA-"
          }
          Name={"Saved"}
        />
      </div>
    </div>
  );
};

const SideBarOption = ({ Icon, Name }) => {
  return (
    <div className="sidebarOption__option">
      <div className="option__img">
        <img src={Icon} />
      </div>
      <span>{Name}</span>
    </div>
  );
};

export default Sidebar;
