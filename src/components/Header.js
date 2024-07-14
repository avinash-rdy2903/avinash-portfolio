import React, { useState, useEffect, useMemo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";


let  Header = (props) => {
  
  const [titles,setTitles] = useState([]);

  const [state,setState] = useState(false);

  const [data,setData] = useState({checked:false});
  // useEffect(()=> {
    
  //   setState((prev)=>{return {...prev,checked:false}});
  // },[]);

  let onThemeSwitchChange = () =>{
    setState((prev)=>{return { ...prev,checked :!prev.checked}});
    setTheme();
  }

  let setTheme = ()=> {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
    setData((prev)=>{return {...prev,theme:newTheme}});
  }

  useEffect(()=>{
    if (props.sharedData) {
      setData((prev)=>{return {...prev,name:props.sharedData.name}});
      setTitles(props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat());
    }
  },[props]);
  // if (props.sharedData) {
  //   setData((prev)=>{return {...prev,name:props.sharedData.name}});
  //   setTitles(props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat());
  // }
  // console.log(titles);

  // const HeaderTitleTypeAnimation = useMemo( () => {
  //   return <Typical className="title-styles" steps={titles} loop={30} />
  // }, [titles]);

  
  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <h1 className="mb-0">
              <Typical steps={[data.name]} className="d-inline me-3" wrapper="p" />
              <a href={process.env.REACT_APP_RESUME_LINK} target="_blank" className={`${data.theme=='dark'?'text-light':'text-dark'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="1em" height="1em" viewBox="0 0 20 20" {...props}><g fill="currentColor"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"></path><path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clipRule="evenodd"></path><path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clipRule="evenodd"></path></g></svg>
              </a>
            </h1>
            <div className="title-container">
              <Typical className="title-styles" steps={titles} loop={30} />
              {/* <HeaderTitleTypeAnimation/> */}
            </div>
            <Switch
              checked={state.checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;
