import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import CV from "./Cv.pdf";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { GlobalContext } from "../App";
import { useContext } from "react";
export default function Navbar() {
  const globalCont = useContext(GlobalContext);

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
        {globalCont.dimensions.width > 650 ? (
          <>
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
            <Button
              className="portfolio_button "
              // isIconOnly={true}
              style={{
                backgroundColor: "#0733D8",
              }}
              variant="solid"
              startContent={
                <i
                  style={{ fontSize: "15px" }}
                  className="fa-solid fa-file-pdf"
                  aria-hidden="true"
                ></i>
              }
              size="md"
            >
              <a
                href={CV}
                download="Sebastian Cappadona_CV"
                target="_blank"
                rel="noreferrer"
              >
                Curriculum
              </a>
            </Button>
          </>
        ) : (
          <Button
            className="portfolio_button"
            // isIconOnly={true}
            style={{
              backgroundColor: "#3d3d3d",
            }}
            startContent={
              <i
                style={{ fontSize: "15px" }}
                className="fa-solid fa-chevron-up"
                aria-hidden="true"
              ></i>
            }
            variant="solid"
            size="md"
          >
            <Popover placement="bottom-end" showArrow={false} crossOffset={18}>
              <PopoverTrigger>
                <div
                  className="portfolio_button rounded-md"
                  // isIconOnly={true}
                  style={{
                    backgroundColor: "#3d3d3d",
                  }}
                >
                  More
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="grid grid-cols-1 gap-2">
                  <Button
                    // isIconOnly={true}
                    variant="flat"
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
                    // isIconOnly={true}
                    variant="flat"
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
                  <Button
                    // isIconOnly={true}
                    variant="flat"
                    startContent={
                      <i
                        style={{ fontSize: "15px" }}
                        className="fa-solid fa-file-pdf"
                        aria-hidden="true"
                      ></i>
                    }
                    size="md"
                  >
                    <a
                      href={CV}
                      download="Sebastian Cappadona_CV"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Curriculum
                    </a>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}
