import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { RichText, Link } from "prismic-reactjs";
import { BlogProps } from "./interface";

const Blog = ({ slice }: any) => {
  console.log("slice", slice)
  return (
    <Flex flexFlow="column">
      <Text>{slice.primary.title}</Text>
      <ChakraLink href={Link.url(slice.primary.link.url)}>My Link</ChakraLink>
      <Image
        src={slice.primary.previewimage.url}
        alt={slice.primary.previewimage.alt}
      />
      {slice?.items.map((item: any, i: number) => {
        return <Flex key={i} flexFlow="column"></Flex>;
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
};

export default Blog;
