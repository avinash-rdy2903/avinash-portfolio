import React from 'react';

let Education = ({resumeBasicInfo, educationData})=>{

    let link = resumeBasicInfo.section_name.education.link,
        sectionName = resumeBasicInfo.section_name.education.title;
    return (
        <section id={link} style={{paddingBottom:"5%"}}>
            <div className="col-md-12 mb-1"  style={{marginTop:"0.6%"}}>
                <h1 className="section-title">
                <span className="text-white">{sectionName}</span>
                </h1>
            </div>
            <div className='container-fluid col-md-12 h-100' >
                <div className='flex-column d-flex justify-content-between align-items-center '>
                    {
                        educationData.map((ele,i)=>{
                            return (
                                <div className='card col-md-8 mb-5' key={i}>
                                    <div className='card-body container'>
                                        <div className='card-title fs-1'>
                                            {ele.institution_name}
                                            
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div className="card-subtitle mb-2 fs-3 d-inline">{ele.degree_name+" in "+ele.major}</div>
                                            <div className='card-subtitle mb-2 me-2 fs-3 text-end d-inline'>{`${ele.start_ts} - ${ele.end_ts}`}</div>
                                        </div>
                                        <div class="blockquote-footer mt-1 fs-4">{`GPA - ${ele.gpa}/${ele.gpa_total}`}</div>

                                        <p className='card-text fs-3'>{`Course work: ${ele.course_work}`}</p>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                    

                    
                </div>
            </div>

        </section>
    )
}

export default Education;