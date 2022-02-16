export interface BlogProps {
  slice: Items;
}

export interface Items {
  items: Item[];
}

export interface Item {
  title: string;
  link: string;
  image: Image;
}

export interface Image {
  url: string;
  alt: string;
}
