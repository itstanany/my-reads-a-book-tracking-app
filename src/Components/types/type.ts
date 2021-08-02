import { ChangeEvent } from "react";

type IndustryIdentifierType = {
  type: string;
  identifier: string;
}
type ReadingModesType = {
  text: boolean;
  image: boolean;
}

type PanelizationSummaryType = {
  "containsEpubBubbles": boolean;
  "containsImageBubbles": boolean;
}

type ImageLinksType = {
  "smallThumbnail": string;
  "thumbnail": string;
}

export type ShelfType = "currentlyReading" | 'read' | 'wantToRead' | 'none';

export type OnShelfChangeType = (
  (e: ChangeEvent<HTMLSelectElement>, book: BookType, index?: number) => Promise<void>);

export type BookType = {
  "title": string;
  "subtitle": string;
  "authors": string[];
  "publisher": string;
  "publishedDate": string;
  "description": string;
  "industryIdentifiers": IndustryIdentifierType[];
  "readingModes": ReadingModesType;
  "pageCount": number;
  "printType": string;
  "categories": string[];
  "averageRating": number;
  "ratingsCount": number;
  "maturityRating": string;
  "allowAnonLogging": boolean;
  "contentVersion": string;
  "panelizationSummary": PanelizationSummaryType;
  "imageLinks": ImageLinksType;
  "language": string;
  "previewLink": string;
  "infoLink": string;
  "canonicalVolumeLink": string;
  "id": string;
  "shelf"?: ShelfType;
};


export type OrderedBooksType = {
  currentlyReading: BookType[];
  wantToRead: BookType[];
  read: BookType[];
}

export type SearchResultType = BookType[] | ({
  error: string;
  items: [];
});


export type BookPropsTypes = {
  book: BookType;
  onShelfChange: OnShelfChangeType;
  index: number;
}

export type BookShelfPropsTypes = {
  title: string;
  books: BookType[];
  onShelfChange: OnShelfChangeType;
}