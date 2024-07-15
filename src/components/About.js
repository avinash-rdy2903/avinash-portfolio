import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";




import reactIcon from "@iconify/icons-logos/react";
import angularIcon from "@iconify/icons-logos/angular-icon"
// import vueIcon from "@iconify/icons-logos/vue";

let  About= (props)=> {

 

  const [detailsData,setDetailsData] = useState({
    profilePic: "images/" + props.sharedBasicInfo.profile_pic,
    aws_icon:"images/" + props.sharedBasicInfo.aws_icon,
    hello:props.resumeBasicInfo.description_header,
    sectionName:props.resumeBasicInfo.section_name.about.title,
    about:props.resumeBasicInfo.description
  });

  

  // useEffect(()=> {
  //   console.log(props);
  //   if (props.sharedBasicInfo) {
  //     setDetailsData((prev)=>{return {...prev,profilePic:"images/" + props.sharedBasicInfo.profile_pic}});
  //     setDetailsData((prev)=>{return {...prev,aws_icon:"images/" + props.sharedBasicInfo.aws_icon}});
  //   }
  //   if (props.resumeBasicInfo) {
  //     setDetailsData((prev)=>{return {...prev,sectionName : props.resumeBasicInfo.section_name.about}});
  //     setDetailsData((prev)=>{return {...prev,hello : props.resumeBasicInfo.description_header}});
  //     setDetailsData((prev)=>{return {...prev,about : props.resumeBasicInfo.description}});
      
  //   }
  // },[]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <section id="about">
      {/* {console.log(detailsData.profilePic)} */}
      {detailsData.profilePic && <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{detailsData.sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                
                <img
                  // height="250px"
                  src={detailsData.profilePic}
                  alt="Avatar placeholder"
                  className="h-auto container"
                />
                
                <div className="d-flex justify-content-center">
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    className="float-start"
                  />  
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    className="mx-auto"
                    viewBox="0 0 24 24" color= "#4da441">
                      <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338c0 0-.599.034-1.201.133c0 
                      0 .228-.097.519-.198c2.374-.821 3.496-.986 4.939-1.727c2.71-1.388 5.408-4.413 5.957-7.555c-1.032 
                      3.022-4.17 5.623-7.027 6.679c-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 
                      1.894-8.059c1.916-.736 3.747-.332 5.818-.825c2.208-.525 4.766-2.18 5.805-4.344c1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212
                      0 0 1-1.065 1.89a9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 
                      9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292c.274-2.539-.476-5.763-1.752-9.596" fill="#4da441">

                      </path>
                  </svg>

                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    className="mx-auto"
                  /> 
                                
                  <img
                    // height="250px"
                    src={detailsData.aws_icon}
                    alt="Avatar placeholder"
                    className="float-end w-25 h-auto"
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                </div>
                {/* <Icon
                  icon={vueIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                /> */}
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    textAlign:"justify",
                    fontSize: "142%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{detailsData.hello} :) </span>
                  <br />
                  <br />
                  {detailsData.about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
}


export default About;
