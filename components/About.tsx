"use client";
import React from 'react';
import { useState, useEffect } from 'react';
const About = ({ aboutdata }: { aboutdata: any}) => {


  return (
    <section className="section_common about_nrvasa pb_xs">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="img_box"><img src="http://localhost:3000/images/products/product1.png" /></div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="content_box">
            <h2>{aboutdata.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: aboutdata.body }}></div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default About;