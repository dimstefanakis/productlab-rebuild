import { useRouter } from "next/router";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SolutionBox from "../SolutionBox";
import { InsightsProps } from "./interface";

function Insights({ data }: InsightsProps) {
  const router = useRouter();

  function onClick() {
    router.push("#hs-chat-open");
  }

  let description =
    "Measure the impossible with our task marketplace. We have thousands of users on standby 24/7 to perform real world data collection needs at scale. From images to price checks, we have you covered.";
  return (
    <CommonLandingBox
      id="solutions"
      title="Data Collection"
      subheader={description}
      buttonText="Book demo"
      onButtonClick={onClick}
      rightSideComponent={<SolutionBox title="01" image="/thing5.png" />}
      withBorder
    />
  );
}

export default Insights;
