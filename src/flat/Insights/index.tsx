import { useTheme } from "@chakra-ui/system";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SolutionBox from "../SolutionBox";
import { InsightsProps } from "./interface";

function Insights({ data }: InsightsProps) {
  return (
    <CommonLandingBox
      id="solutions"
      title="Insights"
      subheader="Whatever the insight."
      buttonText="Book demo"
      rightSideComponent={<SolutionBox title="01" />}
      withBorder
    />
  );
}

export default Insights;
