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
      subheader="Check out the latest insights from contributor data."
      buttonText="View all"
      rightSideComponent={<TrendCarousel data={data} />}
    />
  );
}

export default Trends;
