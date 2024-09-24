import React, {  useEffect, useState } from "react";
import "./App.scss";
import resumeDataJsonJava from "./content/res_primaryLanguage.json";
import resumeDataJsonNode from "./content/res_primaryLanguage_node.json";
import resumeDataJsonPython from "./content/res_primaryLanguage_python.json";

import sharedDataJson from "./content/portfolio_shared_data.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Research from "./components/Research";

let App= () => {

  const [dev,setDev] = useState('ENV_1');

  const [state,setState] = useState({
    foo: "bar",
    resumeData: null,
    sharedData: sharedDataJson,
  });

  const mappedValues = new Map();
  mappedValues.set('ENV_1',resumeDataJsonJava);
  mappedValues.set('ENV_2',resumeDataJsonNode);
  mappedValues.set('ENV_3',resumeDataJsonPython);


  useEffect(()=>{

    const url = window.location.href;
    let params = new URLSearchParams(document.location.search);
    let currDev = params.get('dev');

    if(currDev===null && window.history.state!=null){
      currDev = window.history.state['dev'];
      
    }

    if(currDev===null){
      currDev = 'ENV_1'
    }

    setState((prev)=>{
      return {...prev,resumeData:mappedValues.get(currDev)}
    })

    
    window.history.pushState({dev:currDev},document.title,window.location.pathname)
    
  },[])
  

  

  
  

  
  // let loadResumeFromPath= async (path)=> {
  //   try{
  //     let response = await fetch(`/${path}`,{
  //       method: 'GET', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if(response.ok){
  //       let json = await response.json();
  //       setState((prev)=>{console.log(json);return {...prev, sharedData:JSON.parse(json)}})
  //     }
      
  //   }catch(error){
  //     console.error('Error fetching JSON:', error)
  //   };

  // }
  
  // let loadSharedData = async ()=> {
  //   try{
  //     let response = await fetch('/portfolio_shared_data.json',{
  //       method: 'GET', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     if(response.ok){
  //       let json = await response.json();
  //       setState((prev)=>{console.log(json);return {...prev, sharedData:JSON.parse(json)}})
  //     }
      
  //   }catch(error){
  //     console.error('Error fetching JSON:', error)
  //   };
    
  // };
 
  // useEffect(()=> {
  //   console.log(`${process.env.PUBLIC_URL}`);
  //   let callback = async ()=>{
  //     await loadResumeFromPath(`res_primaryLanguage.json`);
  //     await loadSharedData()
  //   }
    
  //   callback();
    
  //   console.log(state);
  // },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    state.resumeData ? <div>
      <Navbar sectionTitles = {state.resumeData.basic_info.section_name} />
      <Header sharedData={state.sharedData.basic_info} />
      {/* <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            this.applyPickedLanguage(
              window.$primaryLanguage,
              window.$secondaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            this.applyPickedLanguage(
              window.$secondaryLanguage,
              window.$primaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div> */}
      
      <About
        resumeBasicInfo={state.resumeData.basic_info}
        sharedBasicInfo={state.sharedData.basic_info}
      />
      <Education
        resumeBasicInfo={state.resumeData.basic_info}
        educationData={state.resumeData.education}
      />
      <Experience
        resumeBasicInfo={state.resumeData.basic_info}
        sharedBasicInfo={state.sharedData.basic_info}
        resumeExperience={state.resumeData.experience}
      />
      <Projects
        resumeProjects={state.resumeData.projects}
        resumeBasicInfo={state.resumeData.basic_info}
      />
      <Skills
        sharedSkills={state.sharedData.skills}
        resumeBasicInfo={state.resumeData.basic_info}
      />
      <Research
        sectionTitleInfo={state.resumeData.basic_info.section_name.research_achievements}
        researchData={state.resumeData.research}
        />
      
      
      <Footer sharedBasicInfo={state.sharedData.basic_info} />
    </div> : <p></p>
  );
  
}

export default App;
