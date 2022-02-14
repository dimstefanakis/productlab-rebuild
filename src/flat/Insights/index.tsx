import { useTheme } from "@chakra-ui/system";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";

function Insights() {
  return (
    <CommonLandingBox
      title="Insights"
      subheader="Whatever the insight."
      buttonText="Book demo"
      rightSideComponent={<TrendCarousel />}
      withBorder
    />
  );
}

export default Insights;
