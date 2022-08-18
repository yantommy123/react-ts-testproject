import React=require("react");
import { Person, Profile } from "./Profile";

export const Profiles = (props: Person[]) => {
  return (
      props.map(item => <Profile { ...item} />)
  );
};