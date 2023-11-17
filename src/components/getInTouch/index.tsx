import { useState, useEffect } from 'react';
import { Anton } from 'next/font/google'
import { Flex, Box, Text, Image, Heading, Button, Input, Stack, Select, Textarea } from "@chakra-ui/react";
import useMediaQuery from '@/app/hooks/useMediaQuery';
import { Link as ChakraLink } from "@chakra-ui/layout";
import { useForm, SubmitHandler } from "react-hook-form"
import { useToast } from '@chakra-ui/react';

const anton = Anton({ weight: '400', preload: false })

type Inputs = {
  inquiry_type: string
  name: string
  email: string
  message: string
}

const options = [
  'Business Inquiry',
  'Support'
]

function GetInTouch() {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const isLargerThan768 = useMediaQuery("(min-width: 768px)")

  async function onSubmit(data: Inputs) {
    try {
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setLoading(false)
      toast({
        title: "",
        description: "Thank you for contacting us! We will get back to you shortly.",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <Flex w="100%" flexFlow="column" alignItems="center">
      <Heading className={anton.className} fontSize={{
        base: '40px',
        md: '60px'
      }} w="100%" maxW="900px" textAlign="center" mt={{
        base: '48px',
        md: '96px'
      }}>
        Get In Touch
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Stack
          w="100%"
          maxW="600px"
          mt="32px"
          spacing={4}
          alignItems='center'
        >
          <Select
            w="100%"
            maxW="900px"
            mt="32px"
            {...register("inquiry_type", { required: true })}
          >
            {options.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </Select>
          <Input
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <Input
            placeholder="Email"
            {...register("email", {
              required: true, pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <Textarea
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <Button type="submit" w="max-content" isLoading={loading} mt="24px" py={6} borderRadius="full" colorScheme="blue">
            Contact Us
          </Button>
        </Stack>
      </form>
      <Image
        src={isLargerThan768 ? "/dots.png" : "/small-dots.png"}
        alt="dots"
        w="100%"
        my="32px"
      />
    </Flex>
  )
}

export default GetInTouch;
