import { useRouter } from "next/router";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SwitchButtons from "./SwitchButtons";
import { TrendsProps } from "./interface";

function Trends({ data }: TrendsProps) {
  const router = useRouter();

  function onButtonClick(){
    router.push('/trends');
  }

  return (
    <CommonLandingBox
      id="trends"
      title="Trends"
      titleRightComponent={<SwitchButtons />}
      subheader="Understand what is happening in the market with the latest insights generated from our contributor data."
      buttonText="View all"
      onButtonClick={onButtonClick}
      rightSideComponent={
        <TrendCarousel
          data={data.filter((item: any, i: number) => item.data.featured)}
        />
      }
    />
  );
}

export default Trends;
