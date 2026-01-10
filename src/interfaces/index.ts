export type Date =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | "";

export interface Data {
  id: string;
  alias: string;
  name: string;
  date: Date;
}
