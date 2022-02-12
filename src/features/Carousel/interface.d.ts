export interface CarouselProps {
  children: JSX.Element[];
  gap: number;
  itemWidth: number;
}

export interface SliderProps {
  children: JSX.Element;
  gap: number;
  setTrackIsActive: any;
  initSliderWidth: any;
  setActiveItem: any;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
}

export interface TrackProps {
  children: JSX.Element[];
  gap: number;
  setTrackIsActive: any;
  setActiveItem: any;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  multiplier: number;
  trackIsActive: boolean;
}

export interface ItemProps {
  children: JSX.Element;
  gap: number;
  setTrackIsActive: any;
  setActiveItem: any;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  trackIsActive: boolean;
  index: number;
}
