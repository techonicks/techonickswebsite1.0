export interface Event {
  email? : string
  type: "past" | "upcoming" | "ongoing" | ""
  title: string;
  description?: string;
  image: string | File;
  link?: string;
  date? : string
}
