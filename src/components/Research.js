import React from 'react';

let Research = (props)=>{

    return (
        <section id={'experience'}>
            <div className="col-md-12 mb-1">
                <h1 className="section-title">
                <span className="text-black">{props.sectionTitleInfo.title}</span>
                </h1>
            </div>
            <div className='container col-md-12 h-100 pb-5' id={props.sectionTitleInfo.link}>
                <div className='col-md-4 text-black fs-2 mb-5'>Publications</div>
                {
                    props.researchData.publications.map((ele,i)=>{
                        return (
                            <div className='card' key={i}>
                                <div className='card-header fs-3'>
                                    {`#${i+1}`}
                                </div>
                                <div className='card-body'>
                                    <div className='card-title fs-2'>{ele.title}</div>
                                    {/* <div className='card-subtitle fs-3'>{ele.author}</div> */}
                                    <div className='d-flex justify-content-between'>
                                        <div className="card-subtitle mb-2 fs-3 d-inline">{ele.author}</div>
                                        <div className='card-subtitle mb-2 me-2 fs-3 text-end d-inline'>{`${ele.year}`}</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className="card-subtitle mb-2 fs-3 d-inline">{ele.publisher}</div>
                                        <div className='card-subtitle mb-2 me-2 fs-3 text-end d-inline'>{`${ele.volume}`}</div>
                                    </div>
                                    <div className='card-footer fs-4 mb-2' style={{textAlign:"justify"}}>
                                        {ele.abstract}
                                    </div>
                                    <div className='card-footer card-subtitle fs-3'>
                                        {"Cite: "+ ele.cite}

                                    </div>
                                
                                </div>
                            
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Research;