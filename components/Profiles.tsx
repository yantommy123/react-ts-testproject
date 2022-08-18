import React=require("react");
import { getProfile } from "../services/getProfile";
import { Person, Profile } from "./Profile";

export const Profiles = () => {
  const [profiles, setProfiles] = React.useState<Person[]>([]);

  React.useEffect(() => {
       getProfile("tom").then((res) => {
         const person: Person = {
            name: res.data.name,
            company: res.data.company
         };
         const prev: Person[] = [...profiles];

        // setProfiles([person, ...prev])
      });

      getProfile("david").then((res) => {
        const person: Person = {
           name: res.data.name,
           company: res.data.company
        };
        const prev = [...profiles];
       //setProfiles([person, ...prev])
     });
    
  });

  return (
      profiles.map(item => <Profile { ...item} />)
  );
};