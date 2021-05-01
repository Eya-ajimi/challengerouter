import OurTours from "./OurTours/OurTours";

 
 const travelling =({city,deletecity , toggleRead})=>{
 return (
     <div style={{padding:"10%"}} >
         {city.map(cityy=> <OurTours key ={cityy.id} toggleRead={toggleRead} cityy ={cityy} deletecity={deletecity} />)}
     </div>
 )
     
 }
 export default travelling;