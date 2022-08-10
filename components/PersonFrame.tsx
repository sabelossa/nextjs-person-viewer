import React from 'react';
import { render } from 'react-dom';
import Userbox from './Userbox';

function renderUsers(inputList: string | any[]) {
  const userList = [];

  for (let i = 0; i < inputList.length; i++) {
    let name = `${inputList[i].name.first} ${inputList[i].name.last}`;

    let avatar = inputList[i].picture.large;

    let email = inputList[i].email;

    let key = inputList[i].id.value;

    userList.push(
      <Userbox name={name} avatar={avatar} email={email} key={key} />
    );
  }
  return userList;
}

function PersonFrame(props: any) {
  const { results } = props;
  //console.log(results.results);
  const TempList = results.results;

  //return <div>{TempList}</div>;

  return <div>{renderUsers(TempList)}</div>;
}

export default PersonFrame;
