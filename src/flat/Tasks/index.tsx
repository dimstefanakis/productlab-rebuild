import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import { TasksProps } from "./interface";

function Tasks({ data }: TasksProps) {
  let text =
    "Measure the impossible with our task marketplace. We have thousands of users on standby 24/7 to perform real world data collection needs at scale. From images to price checks, we have you covered.";
  return (
    <CommonLandingBox
      title="Tasks"
      subheader={text}
      buttonText="Book demo"
      rightSideComponent={<TrendCarousel data={data} />}
    />
  );
}

export default Tasks;
