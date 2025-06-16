import { FaTwitter, FaLinkedin } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";

interface FooterProps {
  theme?: "dark" | "light";
  hasIndent?: boolean;
}

function Footer({ theme = "light", hasIndent = true }: FooterProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className={`${hasIndent ? "-mx-6" : ""} flex flex-col md:flex-row justify-between md:justify-auto items-center py-10 px-6
      ${theme == "dark" ? "bg-gray-800" : "bg-gray-200"} `}
    >
      {isMobile ? (
        <div
          className="grid grid-cols-2 grid-rows-5 gap-6 w-full"
          style={{
            gridTemplateAreas: `
                 "privacy info"
                 "terms contact"
                 "blog ."
                 "li tw"
                 "copywrite copywrite"`,
          }}
        >
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "privacy" }}
          >
            <Link href="/privacy">Privacy</Link>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "terms" }}
          >
            <Link href="/terms">Terms & Conditions</Link>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "contact" }}
          >
            <Link href="#get-in-touch">Contact Us</Link>
          </div>
          <div
            className="flex text-center justify-center items-center"
            style={{ gridArea: "info" }}
          >
            <Link href="mailto:support@productlab.ai?subject=Do Not Sell My Information Request">
              Do Not Sell Info
            </Link>
          </div>
          <div
            className="flex text-center justify-center items-center"
            style={{ gridArea: "blog" }}
          >
            <Link
              href="https://app.productlab.ai/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "li" }}
          >
            <Link
              href="https://www.linkedin.com/company/productlabai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "tw" }}
          >
            <Link
              href="https://twitter.com/productlabai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ gridArea: "copywrite" }}
          >
            <p>© ProductLab. All Rights Reserved</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 my-0">
            <p>© ProductLab. All Rights Reserved</p>
          </div>
          <div className="block">
            <Link
              href="https://app.productlab.ai/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              Blog
            </Link>
            <Link href="/privacy" className="mr-4">
              Privacy
            </Link>
            <Link href="/terms" className="mr-4">
              Terms and Conditions
            </Link>
          </div>
          <div className="block">
            <Link
              href="mailto:support@productlab.ai?subject=Do Not Sell My Information Request"
              className="mr-4"
            >
              Do Not Sell Info
            </Link>
            <Link href="#get-in-touch">Contact Us</Link>
          </div>
          <div className="flex justify-between mx-4">
            <Link
              href="https://twitter.com/productlabai"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/productlabai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;
