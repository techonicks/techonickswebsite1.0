export interface Event {
  type: "past" | "upcoming" | "ongoing" | string;
  title: string;
  description?: string;
  image: string;
  link: string;
  date : string
}
