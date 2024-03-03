import { Timeline } from "antd";
import { useEffect, useState } from "react";
import { sanityClient } from "../client";
import { Spinner } from "@nextui-org/react";

const Experience = () => {
  const [ExperienceData, setExperienceData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "workExperience"]{
           title,
          Company,
          description,
          StartDate,
          EndDate
        }`
      )
      .then((data) => setExperienceData(data))
      .catch(console.error);
  }, []);


  return (
    <div data-aos="zoom-in" className="w-full h-full">
      <div
        className="bg-white"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <h1 className="text-6xl text=bold  mb-12 flex cursive">Experience</h1>
        <hr />
      </div>
      {!ExperienceData ? (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner color="default" />
        </div>
      ) : (
        <div style={{ overflowY: "auto", overflowX: "hidden" }}>
          <Timeline
            className="mt-2"
            mode="alternate"
            items={ExperienceData.sort(
              (a, b) =>
                new Date(b.StartDate).getTime() -
                new Date(a.StartDate).getTime()
            ).map((item, index) => ({
              children: (
                <section
                  data-aos="zoom-in"
                  style={{ textAlign: index % 2 ? "right" : "left" }}
                >
                  <header>
                    <h3 style={{ fontWeight: 800, marginBottom: -5 }}>
                      {" "}
                      {item.title}
                    </h3>
                    <p>{item.Company}</p>
                    <div
                      className="flex flex-row "
                      style={{ justifyContent: index % 2 ? "flex-end" : "" }}
                    >
                      <div
                        className="flex flex-row items-center justify-between"
                        style={{ width: "150px", fontSize: "12px" }}
                      >
                        <p>{new Date(item.StartDate).toLocaleDateString()}</p>
                        <p>
                          <i className="fa-solid fa-angles-right"></i>
                        </p>
                        <p>
                          {item.EndDate ? (
                            new Date(item.EndDate).toLocaleDateString()
                          ) : (
                            <b>Present</b>
                          )}
                        </p>
                      </div>
                    </div>
                  </header>
                  <main className="text-xs">{item.description}</main>
                </section>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default Experience;
//
