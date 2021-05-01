import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = ({}) => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    </Segment>
  );
};
export default Loading;