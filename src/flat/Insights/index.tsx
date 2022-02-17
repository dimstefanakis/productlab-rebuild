import { useTheme } from "@chakra-ui/system";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import { InsightsProps } from "./interface";

function Insights({ data }: InsightsProps) {
  return (
    <CommonLandingBox
      title="Insights"
      subheader="Whatever the insight."
      buttonText="Book demo"
      rightSideComponent={<TrendCarousel data={data} />}
      withBorder
    />
  );
}

export default Insights;
