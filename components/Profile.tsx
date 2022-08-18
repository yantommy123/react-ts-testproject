import React=require("react");

export type Person = {
  name: string;
  company: string;
};

export const Profile = (props: Person) => {
  return (
      <div>
        <div>{props.name}</div>
        <div>{props.company}</div>
       </div>
  )
}