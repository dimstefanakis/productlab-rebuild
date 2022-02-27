import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SolutionBox from "../SolutionBox";
import { TasksProps } from "./interface";

function Tasks({ data }: TasksProps) {
  let text =
    "Uncover the entire story behind the data by understanding demographics, sentiment, and intent of audiences behind it. Our direct relationship allows you to go behind";
  return (
    <CommonLandingBox
      title="Consumer Insights"
      subheader={text}
      buttonText="Book demo"
      rightSideComponent={<SolutionBox title="02" image="/thing6.png" />}
    />
  );
}

export default Tasks;
