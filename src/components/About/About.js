import React from 'react';
import aboutimg from '../../image/Learning-cuate.png'

const About = () => {
    return (
      <div>
    

         <div div className = "container  mt-5 mb-5" >
 <h1 className="about-title text-center mt-5 mb-5 text-danger">What is IELTS?</h1>
 <div div className = "row bg-gray" >
      <div div className = "col-md-6" >
       
        <ul ul className = "bg-dark text-white" >
          <li className="fs-5 ">The International English Language Testing System (IELTS) is the world’s most popular high-stakes English language proficiency test for study, work and migration, with more than three million tests taken in the past year.</li>
          <li li className = "fs-5 " >
            The IELTS results are recognised by more than 10, 000 organisations, including educational institutions, employers, professional associations and governments, in 140 countries around the world.
          </li>
          <li className = "fs-5 " >
            The test content
            for IELTS is developed by an international team of experts and undergoes extensive research to ensure the test remains fair and unbiased
            for any candidate regardless of nationality, background, gender, lifestyle or location.
                    </li>
                    <li li className = "fs-5 " >
                        You can take IELTS Academic or IELTS General Training, depending on the organisation you are applying to and your plans for the future. If you are planning to study or move to the UK, you will need to take an IELTS test approved by the UK Visa and Immigration authority known as IELTS for UKVI.
                    </li>
        </ul>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={aboutimg} alt="" />
      </div>
</div>

        </div>
       </div>
    );
};

export default About;