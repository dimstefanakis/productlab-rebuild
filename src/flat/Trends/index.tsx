import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SwitchButtons from "./SwitchButtons";
import { TrendsProps } from "./interface";

function Trends({ data }: TrendsProps) {
  return (
    <CommonLandingBox
      id="trends"
      title="Trends"
      titleRightComponent={<SwitchButtons />}
      subheader="Understand what is happening in the market with the latest insights generated from our contributor data."
      buttonText="View all"
      rightSideComponent={<TrendCarousel data={data} />}
    />
  );
}

export default Trends;
