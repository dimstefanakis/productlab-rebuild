import { useRouter } from "next/router";
import TrendCarousel from "../TrendCarousel";
import CommonLandingBox from "../CommonLandingBox";
import SolutionBox from "../SolutionBox";
import { TasksProps } from "./interface";

function Tasks({ data }: TasksProps) {
  const router = useRouter();

  function onClick(){
    location.href = "#hs-chat-open";
  }

  let text =
    "We use machine learning to transform data into reliable structured datasets delivered 24/7 directly to data science leaders through AWS, BigQuery, SnowFlake, and custom data feeds.";
  return (
    <CommonLandingBox
      title="Data Processing"
      subheader={text}
      buttonText="Book demo"
      onButtonClick={onClick}
      rightSideComponent={<SolutionBox title="02" image="/thing6.png" />}
    />
  );
}

export default Tasks;
