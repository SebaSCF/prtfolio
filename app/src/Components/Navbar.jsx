import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        zIndex: 1005,
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ButtonGroup>
        <Button
          className="portfolio_button "
          // isIconOnly={true}
          style={{ backgroundColor: "#3d3d3d" }}
          variant="solid"
          startContent={
            <i
              style={{ fontSize: "15px" }}
              className="fa fa-home"
              aria-hidden="true"
            ></i>
          }
          onClick={() => navigate("/")}
          size="md"
        >
          Home
        </Button>
        <Button
          className="portfolio_button "
          // isIconOnly={true}
          style={{
            backgroundColor: location.pathname.includes("/Experience")
              ? "#7e7575"
              : "#3d3d3d",
          }}
          startContent={
            <i
              style={{ fontSize: "15px" }}
              className="fa-solid fa-layer-group"
              aria-hidden="true"
            ></i>
          }
          onClick={() => navigate("/Experience")}
          variant="solid"
          size="md"
        >
          Experience
        </Button>
        <Button
          className="portfolio_button "
          // isIconOnly={true}
          style={{
            backgroundColor: location.pathname.includes("/Post")
              ? "#7e7575"
              : "#3d3d3d",
          }}
          variant="solid"
          onClick={() => navigate("/Post")}
          startContent={
            <i
              style={{ fontSize: "15px" }}
              className="fa-brands fa-microblog"
              aria-hidden="true"
            ></i>
          }
          size="md"
        >
          Blog
        </Button>

        <Button
          className="portfolio_button "
          // isIconOnly={true}
          style={{
            backgroundColor: location.pathname.includes("/Project")
              ? "#7e7575"
              : "#3d3d3d",
          }}
          variant="solid"
          onClick={() => navigate("/Project")}
          startContent={
            <i
              style={{ fontSize: "15px" }}
              className="fa-solid fa-briefcase"
              aria-hidden="true"
            ></i>
          }
          size="md"
        >
          Projects
        </Button>
      </ButtonGroup>
    </div>
  );
}
