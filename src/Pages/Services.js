import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const Services = () => {

    const services= [{
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<CgWebsite />
    },
    {
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<FaMobileAlt />
    },
    {
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<FaCloud />
    },
    {
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<FaCloud />
    },
    {
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<FaCloud />
    },
    {
      title:"Web development",
      desc:"Build modern,responsive, and scalable web applications tailored to your business needs.",
      icon:<FaCloud />
    },
  ];
  return (
    <div className='container services-page'>
      
      <div className='services-header'> 
        <h1>Our Services</h1>
        <p>We Provide innovative technology solutions to help bussinesses acheive their goals.
          Explore our range of services designed to meet your specific needs.
        </p>
      </div>

      <div  className='services-grid'>
          {
            services.map((service,index)=>(
              <div className='service-card' key={index}>
                <div className='service-icon'>
                    {service.icon}
                </div>

                <h3 className='service-title'> {service.title}</h3>
                <p className='service-desc'>{service.desc}</p>
                <button className='learn-more'>Learn More</button>
              </div>

            )

            )
          }
      </div>

    </div>
  )
}

export default Services
