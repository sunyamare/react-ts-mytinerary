// type declaration file (no export needed because of "d.ts" instead of ".ts") - https://www.youtube.com/watch?v=ODvirqIC09A
// types: for one variable
// interface: for objects
// if a declaration is needed only for one component, do it there

interface City {
  name: string;
  _id: string;
  country: string;
  img: string;
}

type Cities = City[];

type CityProps = {
  city: City;
};

interface Itinerary {
  name: string;
  _id: string;
  city: string;
  profileName: string;
  profilePicture: string;
  likes: number;
  hashtags: string[];
  activities: string[];
}

type Itineraries = Array<Itinerary>;

// "any" to solve:
// CityContext
// ItineraryContext
