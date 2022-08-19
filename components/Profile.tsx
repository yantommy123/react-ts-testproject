import React=require("react");
import '../style.css';

export type Person = {
  name: string;
  company: string;
};

export const Profile = (props: Person) => {
  return (
      <div className = "profile">
        <div>{props.name}</div>
        <div>{props.company}</div>
       </div>
  )
}