import { useRouter } from "next/router";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SolutionBox from "../SolutionBox";
import { InsightsProps } from "./interface";

function Insights({ data }: InsightsProps) {
  const router = useRouter();

  function onClick() {
    location.href = "#hs-chat-open";
  }

  let description =
    "Source scalable and consistent real-time data directly from receipts, digital accounts, paychecks, emails, and more — all fully permissioned and compiled directly from end consumers.";
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
