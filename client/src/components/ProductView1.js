import React from "react";
import axios from "axios";

import { Button, Header, Segment } from "semantic-ui-react";

export default class ProductView extends React.Component {
  state = { product: {}, comments: [] };

  componentDidMount() {
    // here we do api call and update UI
    console.log(this.props.match.params);
    const product_id = this.props.match.params.id;
    axios.get(`/api/products/${product_id}`).then(res => {
      
      // nested axios call
      const productData = res.data;
      axios.get(`/api/products/${product_id}/comments`).then(res => {
        console.log(res)
        this.setState({
          product: productData,
          comments: res.data
        });
      });
    });
  }

  render() {
    const {
      name,
      description,
      price,
      department,
    } = this.state.product;

    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
          <Header as="h3">{department}</Header>
          <Header as="h5" color="grey">
            ${price}
          </Header>
          <p>{description}</p>
        </Segment>
        <Segment>
          <Header as="h1">Comments 1st example</Header>
          {this.state.comments.map(comment => (
            <Segment>
              <Header as="h3">{comment.user}</Header>
              <p>{comment.text}</p>
            </Segment>
          ))}
        </Segment>
        <br />
        <br />
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  }
}
