import React, { Component } from "react";
import axios from "axios";
import { Segment, Header, Button, Form } from "semantic-ui-react";

export default class Comments extends Component {
  state = { comments: [], user:'', text:'' };
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
  handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  handleSubmit=(e)=>{
    const { productId } = this.props;
    axios.post(`/api/products/${productId}/comments`,{
      user: this.state.user,
      text:this.state.text
    }).then((res)=>{
      this.setState({
        comments:[res.data, ...this.state.comments]
      })
    }).catch(err=>{

    })
    // this.setState({
    //   [name]: value
    // })
  }
  render() {
    const { user,  text} = this.state
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="User"
              name="user"
              placeholder="User"
              value={user}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Add Comment"
              name="text"
              placeholder="Comment"
              value={text}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
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
