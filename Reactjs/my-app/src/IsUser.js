import React from 'react';
import {ProfileCard} from './ProfileCard.js';
import {GuestCard} from './GuestCard.js';
// USAGE: <IsUser pfp={catOne} name= "Shane" bio= "I LOVE cats"> </IsUser>
export function IsUser(props) {
  console.log(props.pageID);
  console.log(props.userID);
  if (props.userID === props.pageID && props.userID !== undefined && props.pageID !== undefined) {
    return <ProfileCard pfp={props.pfp} name={props.name} bio={props.bio}> </ProfileCard>;
  }
  return <GuestCard pfp={props.pfp} name={props.name} bio={props.bio}> </GuestCard>;
}
