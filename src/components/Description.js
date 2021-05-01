import React from "react";

import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = (props) => {
  const cityy = props.interTours.find(
    (cityy) => cityy.id == props.match.params.id
  );
  console.log("cityy", cityy);
  return (
    <Card style={{ margin: "auto", width: "70%" }}>
      <Image
        src={cityy && cityy.image}
        wrapped
        ui={false}
        style={{ width: "100%" }}
      />
      <Card.Content>
        <Card.Header>{cityy && cityy.name} </Card.Header>

        <Card.Description>{cityy && cityy.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {cityy && cityy.price}
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;