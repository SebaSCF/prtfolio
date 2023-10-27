import { Progress, Tooltip } from "antd";

const Skills = () => {

  return (
    <div data-aos="zoom-in" className="w-full h-full">
      <div
        className="bg-white"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <h1 className="text-6xl text=bold flex cursive">Skills</h1>
      </div>
      <hr />
      <section
        style={{ overflowY: "auto", overflowX: "auto", maxHeight: "90%" }}
        className=" h-full bg-white w-full grid grid-cols-1 lg:grid-cols-6  gap-5"
      >
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="HTML5">
            <div className="flex flex-col items-center justify-between ">
              <i
                style={{ fontSize: "56px" }}
                className="fa-brands fa-html5"
              ></i>{" "}
            </div>
          </Tooltip>
          <div className="w-full">
            <Progress
              type="line"
              percent={99}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="CSS3">
            <div className="flex flex-col items-center justify-between ">
              <i
                style={{ fontSize: "56px" }}
                className="fa-brands fa-css3-alt"
              ></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={99}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="Javascript">
            <div className="flex flex-col items-center justify-between ">
              <i
                style={{ fontSize: "56px" }}
                className="fa-brands fa-square-js"
              ></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={95}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="Typescript">
            <div className="flex flex-col items-center justify-between ">
              <img
                src="https://imgs.search.brave.com/xlj3KJySz1N-9b8-JMMaMcB7QKH_UydJ8iuJy_SCuEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Zp/bGUtaWNvbnMvaWNv/bnMvbWFzdGVyL3N2/Zy9UeXBlU2NyaXB0/LnN2Zw.svg"
                alt="https://imgs.search.brave.com/xlj3KJySz1N-9b8-JMMaMcB7QKH_UydJ8iuJy_SCuEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Zp/bGUtaWNvbnMvaWNv/bnMvbWFzdGVyL3N2/Zy9UeXBlU2NyaXB0/LnN2Zw.svg"
                style={{ width: "42px", height: "42px" }}
              />
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={56}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="React">
            <div className="flex flex-col items-center justify-between ">
              <i
                style={{ fontSize: "56px" }}
                className="fa-brands fa-react"
              ></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={85}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="Node.js">
            <div className="flex flex-col md:flex-row items-center justify-between ">
              <i style={{ fontSize: "56px" }} className="fa-brands fa-node"></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={75}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="AWS">
            <div className="flex flex-col md:flex-row items-center justify-between ">
              <i style={{ fontSize: "56px" }} className="fa-brands fa-aws"></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={55}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>{" "}
        <div
          className="flex flex-col items-center justify-center p-10 border-1 rounded-md"
          style={{ borderColor: "#3d3d3d" }}
        >
          <Tooltip placement="top" title="Git">
            <div className="flex flex-col md:flex-row items-center justify-between ">
              <i
                style={{ fontSize: "56px" }}
                className="fa-brands fa-git-alt"
              ></i>{" "}
            </div>
          </Tooltip>

          <div className="w-full">
            <Progress
              type="line"
              percent={99}
              strokeLinecap={"butt"}
              strokeColor={"#3d3d3d"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
//
