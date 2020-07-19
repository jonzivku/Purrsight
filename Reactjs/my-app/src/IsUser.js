import React from 'react';
import {ProfileCard} from './ProfileCard.js';
import {GuestCard} from './GuestCard.js';

export function IsUser(props) {
  //const thisUser = props.userID;
  //const thisPage = props.pageID;
  //const name = props.name;
  //const bio = props.bio;
  //const picture = props.picture;
  console.log(props.pageID);
  console.log(props.userID);
  if (props.userID == props.pageID && props.userID !== undefined && props.pageID !== undefined) {
    return <ProfileCard name={props.name} bio={props.bio}> </ProfileCard>;
  }
  return <GuestCard name={props.name} bio={props.bio}> </GuestCard>;
}