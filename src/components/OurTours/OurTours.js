import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button, Image } from 'semantic-ui-react'



const OurTours = ({
 cityy, deletecity , toggleRead
}) => {
  const deletecityy = () => {
    deletecity(cityy.id);
  };
  const toggleReadd = () => {
    toggleRead(cityy.id);
  };
  return (
  <Card>
      <Link to ='/'>  <Button  negative>Retour Home page </Button></Link>
    <Image src={cityy.image}  alt={cityy.name} className="article-img" />
    <Card.Content>
      <Card.Header>{cityy.name.slice(1,10 ).trim()}</Card.Header>
      <Card.Meta>
       
      </Card.Meta>
      <Card.Description>
        {!cityy.read ? (
            <h4>{cityy.description.slice(0, 150) + "..."} </h4>
          ) : (
            <h4 className={{ width: "300px" }}>{cityy.description} </h4>
          )}
          <a className="link" onClick={toggleReadd}>
            {" "}
            {cityy.read ? "read less" : "read more"}{" "}
          </a>
        
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
       {cityy.price}
      
      </a>
    </Card.Content>
    
   <Button onClick={()=> deletecityy(cityy.id)} negative>Not intersested </Button>
    <Link to={`/cityy/${cityy.id}`}>
          {" "}
          <p>More details</p>
        </Link>
  </Card>

  );

};
export default OurTours ; 

