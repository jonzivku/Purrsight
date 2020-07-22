//Home.js
import React, {Component} from 'react';
import NavBar from './NavBar';
import { Row, Col } from 'react-bootstrap';
import catOne from './static/catOne.jpg'
import catTwo from './static/2.jpg'
import catThree from './static/3.png'
import PictureCard from './components/PictureCard.js';
import PostingCard from './components/PostingCard.js'
<<<<<<< HEAD
import {IsUser} from './IsUser.js'
=======
import {WelcomeCard} from './WelcomeCard.js'
>>>>>>> origin/demo
import Profile from './Profile.js'
import {CardColumns } from 'react-bootstrap';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      testPost: {
      name:"foo",
      profilePicture: catTwo,
      picture: catThree,
      description:"Hey look a dang gcat"
      }
    };
  }
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
<<<<<<< HEAD
                <IsUser pfp={catOne} name= "Shane" bio= "I LOVE cats"> </IsUser>
                <PostingCard />
                <PictureCard post={this.state.testPost} />
=======
                <WelcomeCard pfp={catOne} name= "Shane" bio= "I LOVE cats"> </WelcomeCard>
                <PostingCard />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey look a dang gcat" />
                <PictureCard name="Shane" profilePicture={catOne} picture={catThree} description="Hey I found the same cat" />
                <PictureCard name="SNAFU" profilePicture={catTwo} picture={catThree} description="Hey me too" />
                <PictureCard name="SNAFU" profilePicture={catTwo} picture={catThree} description="Hey it's everywhere" />
>>>>>>> origin/demo
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

  // render() {
  //   const { posts } = this.state
  //   return (
  //     <>
  //       <NavBar>
  //       </NavBar>
  //       <div>
  //         <Row className="justify-content-md-center">
  //           <Col md={{ span: 2 }}>
  //             <ProfileCard name={posts.title} bio={posts.body}> </ProfileCard>
  //           </Col>
  //             <Col md={{ span: 4 }} >
  //               <Card >
  //                 <Card.Img variant="top" src={catOne} alt="cat" fluid />
  //                 <Card.Body>
  //                   <Card.Title>Ma cAt post</Card.Title>
  //                   <Card.Text>
  //                     Thissa post
  //                 </Card.Text>
  //                 </Card.Body>
  //                 <Card.Footer>
  //                   <small className="text-muted">Last updated 3 mins ago</small>
  //                 </Card.Footer>
  //               </Card>
  //               <Card >
  //                 <Card.Img variant="top" src={catThree} alt="cat" fluid />
  //                 <Card.Body>
  //                   <Card.Title>Ma cAt post</Card.Title>
  //                   <Card.Text>
  //                     Thissa post
  //                 </Card.Text>
  //                 </Card.Body>
  //                 <Card.Footer>
  //                   <small className="text-muted">Last updated 5 mins ago</small>
  //                 </Card.Footer>
  //               </Card>
  //             </Col>
  //         </Row>
  //       </div>
  //     </>
  //   )
  // }
// }
