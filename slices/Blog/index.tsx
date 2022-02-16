import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { RichText, Link } from "prismic-reactjs";
import { BlogProps } from "./interface";

const Blog = ({ slice }: BlogProps) => (
  <Flex flexFlow="column">
    {slice?.items.map((item, i) => {
      return (
        <Flex key={i} flexFlow="column">
          <Text>{item.title}</Text>
          <ChakraLink href={Link.url(item.link)}>My Link</ChakraLink>
          <Image src={item.image.url} alt={item.image.alt} />
        </Flex>
      );
    })}
    {/* <span className="title">
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Prismic builder!</p>
    )}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style> */}
  </Flex>
);

export default Blog;
