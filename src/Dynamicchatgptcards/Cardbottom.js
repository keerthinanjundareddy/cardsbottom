import React from 'react';
import './Caardbottom.css'
import imageone from '../../src/Assets/1 Electric Car.png'
import imagetwo from '../../src/Assets/two.png'
import imaagethree  from '../../src/Assets/06_HOT_TEA.png'
import imagefour from '../../src/Assets/1.png'
import imaagefive from  '../../src/Assets/003-video.png'
import imagesix from  '../../src/Assets/037-4k.png'
import imageseven from  '../../src/Assets/AUDIO.png'
import imageight from  '../../src/Assets/STAVE.png'

const dummyData = [
  { title: imageone,heading:'3D Animation',content: 'Toyota Automobiles',contenttwo:"An End to End solution is being offered from photoshoot to 3D modelling and animations of the vehicles" },
  { title: imagetwo,heading:'2D Animation', content: 'Shalimar Paints',contenttwo:"Explainer video for Shalimar Paint’s Vendorcommunity to introduce Diwali Incentive Schemes & Expert Painter Program."  },
  { title: imagesix,heading:'Interactive Video',content: 'Louis Phillippe',contenttwo:"This offering creates an engagement with the audience while watching your brand video." },
  

 
  { title: imaagethree, heading:'Web UI/UX',content: 'Tata Himalayan',contenttwo:"We shot a step-by-step interactive web UI/UX DVC in Kashmir toshowcase the journey of the product along with its benefits and recipes to a mass audience."  },

   
  { title: imageseven, heading:'Creative Audio-Visuals',content: 'Coco-Cola',contenttwo:"Success Story AV representing MoHFW’s “War Room” Campaign against COVID-19."  },
   
  { title: imageight, heading:'Film & Music Production',content: 'Alpenlibe juzt jelly',contenttwo:"it is a creative journey that involves visual storytelling and conceptualizations to bring ideas to life."  },

  { title: imagefour, heading:'Graphic Design & Creation',content: 'Amway',contenttwo:"Designed a guidebook for Amway Business Owners to guide customers about sustainable weight loss journey"  },
  { title: imaagefive , heading:'Internal Training AVs',content: 'Ummeed Finance',contenttwo:"Graphic-heavy video presentation forUmmeed Housing Finance showcasing past success story and future growth prospects."  },
  
];

// const Card = ({ title, content }) => (
//   <div className="card">
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

const Cardbottom = () => {
  return (
    <>
   

   <div style={{textAlign:"center",color:"rgb(249, 207, 212)",marginTop:"20px",fontSize:"20px"}}><b>OUR-OFFERS(Brand Strategy Content & Technology)</b></div>
    <div className="card-container">
       {dummyData.map((data, index) => (
        <div key={index} className='card' >
          <div style={{width:"50px",height:"50px"}} >
             <img src={data.title}  alt="imgone" style={{width:"100%",height:"100%",objectfit:"cover"}} />
            </div>
       <div style={{color:"Black",textTransform:"uppercase"}}>{data.heading}</div>
          <div className='title-sections'  style={{color:"grey"}}>{data.contenttwo}</div>

          <div className='title-section' >{data.content}</div>
          
  </div>
      ))}
    </div>
    </>

  );
};

export default Cardbottom;
