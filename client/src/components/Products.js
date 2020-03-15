import React from "react";
import { Card, Header, } from "semantic-ui-react";

class Products extends React.Component {
  state = { products: [], };

  componentDidMount() {
    // TODO: Make GET request with axios
    // TODO: Update state
  }

  renderProducts = () => {
    const { products, } = this.state;

    if (products.length <= 0)
      return <h2>No Products</h2>
    return products.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{ product.name }</Card.Header>
          <Card.Meta>{ product.department }</Card.Meta>
          <Card.Description>
            { product.description }
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <br />
        <Card.Group>
          { this.renderProducts() }
        </Card.Group>
      </div>
    )
  }
}

export default Products;