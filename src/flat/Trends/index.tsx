import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import { TrendsProps } from "./interface";

function Trends({data}: TrendsProps) {
  return (
    <CommonLandingBox
      id="trends"
      title="Trends"
      subheader="Check out the latest insights from contributor data."
      buttonText="View all"
      rightSideComponent={<TrendCarousel data={data}/>}
    />
  );
}

export default Trends;
