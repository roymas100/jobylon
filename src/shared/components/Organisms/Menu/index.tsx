import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "src/shared/components/Atoms/MenuIcon";
import { useCallback } from "react";
import { Wrapper } from "./styles";
import jobylonLogo from "src/shared/images/jobylon-logo-2.png";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const Links = useCallback(() => {
    return (
      <>
        <Link to={"/jobylon"} onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to={"/jobylon/join-us"} onClick={() => setOpen(false)}>
          Join Us
        </Link>
      </>
    );
  }, []);

  return (
    <Wrapper open={open} data-testid="menu">
      <div className="menu-header">
        <div className="logo">
          <span onClick={() => navigate("/jobylon")} data-testid="menu-logo">
            <img src={jobylonLogo} alt="logo" />
          </span>
        </div>
        <div className="links">
          <Links />
        </div>
        <div className="menu-button">
          <MenuIcon open={open} onClick={setOpen} />
        </div>
      </div>
      <div className="opened-menu-links" data-testid="opened-menu-links">
        <Links />
      </div>
    </Wrapper>
  );
};

export default Menu;
