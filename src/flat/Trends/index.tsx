import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";

function Trends() {
  return (
    <CommonLandingBox
      title="Trends"
      subheader="Check out the latest insights from contributor data."
      buttonText="View all"
      rightSideComponent={<TrendCarousel />}
    />
  );
}

export default Trends;
