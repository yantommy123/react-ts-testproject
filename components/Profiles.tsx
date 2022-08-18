import React=require("react");
import { getProfile } from "../services/getProfile";
import { Person, Profile } from "./Profile";

export const Profiles = () => {
  const [profiles, setProfiles] = React.useState<Person[]>([]);

  React.useEffect(() => {
       getProfile("tom").then((res) => {
         
        console.log('result ', res.data);
      });
    
  });

  return (
      profiles.map(item => <Profile { ...item} />)
  );
};