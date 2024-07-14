import {useState} from 'react';


let Navbar = (props) => {


    const fallbackFlags = Object.keys(props.sectionTitles).reduce((flags,ele)=>{return {...flags,[ele]:false}},{});



    // console.log(darkTheme);
    

    const [toggleFlag,setToggleFlag] = useState(fallbackFlags)
    // <nav className="navbar navbar-expand-lg fs-2 container">
            // <div className="container-fluid">
                
                {/* <a className={`nav-link navbar-brand fs-2${toggleFlag.home?'active':''}`} onClick={(e)=> setToggleFlag((prev)=>{return {...prev,home:true}})} href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="nav nav-pills fs-2 justify-content-center mb-2 ml-4 mb-lg-0"
                        style={{borderBottom:"0px"}}
                    >
                        
                        {Object.keys(props.sectionTitles).map((ele,i)=>{
                            let classNames = `nav-link ${toggleFlag.ele?'active':''}`;
                            console.log(toggleFlag);
                            return <li className={`nav-item d-flex flex-sm-fill ${toggleFlag.ele?'nav-tab-bg':''}`} key={i+1}>
                                    <a className={classNames} style={{"color":"black",marginLeft:"8rem"}} aria-current={ele} href="#" onClick={(e)=> setToggleFlag((prev)=>{
                                        prev = Object.keys(prev).reduce((flags,ele)=>{return {...flags,[ele]:false}},{});
                                        return {...prev,[ele]:true}})
                                }>{props.sectionTitles[ele]}</a>
                            </li>
                        })}
                        
                    </ul>
                </div>
            </div>
        // </nav> */}
    return (
        
        <div className="navbar navbar-expand-sm">
            <div className='container d-sm-none'>
                <a class="navbar-brand  fs-2" href="#">Menu</a>
                <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                </button>
            </div>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='nav flex-column flex-sm-row mx-auto w-100 fs-2 justify-content-center' >
                    {Object.keys(props.sectionTitles).map((ele,i)=>{
                                
                                let classNames = `nav-link`;
                                return <li className={`nav-item mx-5 mx-auto mx-md-5 mx-sm-auto`} key={i+1}>
                                        <a className={classNames} href={`#${props.sectionTitles[ele].link}`} style={{"color":"black"}} aria-current={ele} onClick={(e)=> setToggleFlag((prev)=>{
                                            prev = Object.keys(prev).reduce((flags,ele)=>{return {...flags,[ele]:false}},{});
                                            console.log(prev);
                                            return {...prev,[ele]:true}})
                                    }>{props.sectionTitles[ele].title}</a>
                                </li>
                            })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;