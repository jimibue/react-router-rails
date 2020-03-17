import React, { Component } from "react";
import axios from "axios";
import { Segment, Header, Button } from "semantic-ui-react";

export default class Comments extends Component {
  state = { comments: [] };
  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/api/products/${productId}/comments`).then(res => {
      console.log(res);
      this.setState({
        comments: res.data
      });
    });
  }

  deleteComment(id) {
    const { productId } = this.props;
    axios.delete(`/api/products/${productId}/comments/${id}`).then(()=>{
      const newComments = this.state.comments.filter( comment => comment.id != id)
      this.setState({
        comments:newComments
      })
    })

  }
  render() {
    return (
      <Segment>
        <Header as="h1">Comments 2nd example</Header>
        {this.state.comments.map(comment => (
          <Segment key={`comment=${comment.id}`}>
            <Header as="h3">{comment.user}</Header>
            <p>{comment.text}</p>
            <Button onClick={() => this.deleteComment(comment.id)} color='red'>delete</Button>
          </Segment>
        ))}
      </Segment>
    );
  }
}
