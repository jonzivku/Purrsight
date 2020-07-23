//Home.js
import React, {Component} from 'react';
import { Row, Col, CardColumns } from 'react-bootstrap';

import { WelcomeCard } from './WelcomeCard.js'
import NavBar from './NavBar';
import PictureCards from './components/PictureCards.js';
import PostingCard from './components/PostingCard.js'


class Home extends Component{
  // constructor(props) {
  //   super(props);
  // }

  catOne = 'https://picsum.photos/200/300.jpg';
  catTwo = 'https://picsum.photos/200/300.jpg';
  catThree = 'https://picsum.photos/200/300.jpg';


  userProfile = {name:"Shane", pfp:this.catOne, bio:"I heart cats"};

  fourCats = [
    {name:"Shane", pfp:this.catOne, picture:this.catThree, description:"Hey look a dangcat1"},
    {name:"Shane", pfp:this.catOne, picture:this.catTwo, description:"Hayloook dangcat2"},
    {name:"SNAFF", pfp:this.catTwo, picture:this.catThree, description:"Hayloook dangcat3"},
    {name:"SNAFF", pfp:this.catTwo, picture:this.catTwo, description:"Hayloook dangcat4"},
  ];

  // what if posting card also takes a prop to establish the route/uid etc!!!!

  render(){
    return (
      <>
        <NavBar>
        </NavBar>
        <br />
        <div>
          <Row className="justify-content-md-center">
            <Col md={{span: 8}}>
              <CardColumns>
                <WelcomeCard profile={this.userProfile} />
                <PostingCard />
                <PictureCards pictureArray={this.fourCats} />
              </CardColumns>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}


export default Home;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(response => {
  //       console.log(response)
  //       this.setState({posts: response.data})
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

