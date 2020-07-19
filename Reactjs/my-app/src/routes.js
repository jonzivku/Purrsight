//routes.js
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Profile from './Profile.js';
import UpdateProfile from './UpdateProfile.js';
import Home from './Home.js';
import {DataFetching} from './DataFetching.js';

const Routes = [
  {
    path: "/DataFetching/",
    component: DataFetching
  },
  {
    path: "/SignUp/",
    component: SignUp
  },
  {
    path: "/Profile/",
    component: Profile
  },
  {
    path: "/UpdateProfile/",
    component: UpdateProfile
  },
  {
    path: "/Home/",
    component: Home
  },
  {
    path: "/",
    component: SignIn
  }
];

export default Routes;