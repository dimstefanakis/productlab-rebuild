import { Icon, IconProps } from "@chakra-ui/icon";
import { LogoProps } from "./interface";

function Logo(props: LogoProps) {
  return (
    <Icon
      width={props.width}
      height={props.height}
      viewBox="0 0 37 38"
      fill={props.color}
      transition="all 0.3s"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.3686 0H0V26.9028H23.3519C23.3574 26.9028 23.3628 26.9028 23.3683 26.9028C30.8969 26.9028 37 20.8804 37 13.4514C37 6.02251 30.897 0.000147121 23.3686 0Z"
        fill={props.color}
        style={{ transition: "all 0.3s" }}
      />
      <path
        d="M22 15.7778L0 38L-1.09278e-06 13L22 15.7778Z"
        fill={props.color}
        style={{ transition: "all 0.3s" }}
      />
    </Icon>
  );
}

export default Logo;
