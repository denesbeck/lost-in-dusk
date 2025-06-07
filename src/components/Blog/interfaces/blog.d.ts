import { JSX } from "react";

export interface BlogEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  content: JSX.Element;
}
