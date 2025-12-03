/**
 * Type definitions cho Contact Us page
 */

export interface ContactHero {
  title: string;
  backgroundImage: string;
  overlayColor: string;
  sectionClass: string;
  titleClass: string;
  enableScrollspy: boolean;
  backgroundPosition: "top-center" | "center-center" | "bottom-center";
}

export interface ContactCard {
  type: string;
  title: string;
  content: string[];
  iconType: string;
}

export interface MapCoordinates {
  lat: number;
  lng: number;
}

export interface MapTileLayer {
  url: string;
  attribution: string;
  maxZoom: number;
  minZoom: number;
}

export interface ContactMap {
  coordinates: MapCoordinates;
  zoom: number;
  location: string;
  markerTitle: string;
  tileLayer: MapTileLayer;
}

export interface FormField {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  programmeName?: string;
}

export interface ContactForm {
  sectionLabel: string;
  heading: string;
  fields: FormField[];
  submitButton: {
    text: string;
  };
}

export interface ContactData {
  hero: ContactHero;
  contactCards: ContactCard[];
  map: ContactMap;
  form: ContactForm;
}

