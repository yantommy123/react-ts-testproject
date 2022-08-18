import React=require("react");
import { getProfile } from "../services/getProfile";
import { Person, Profile } from "./Profile";

export const Profiles = () => {
  const [profiles, setProfiles] = React.useState<Person[]>([]);

  React.useEffect(() => {
      const result = getProfile("tom");
      console.log('result ', result);
  });

  return (
      profiles.map(item => <Profile { ...item} />)
  );
};