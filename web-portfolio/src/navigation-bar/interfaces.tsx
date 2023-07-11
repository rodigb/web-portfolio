export interface ListItem {
  text: string;
  url: string;
}

export interface MyListComponentProps {
  title: string;
  items: ListItem[];
}
