'use client';

import Image from 'next/image'
import type { Metadata } from 'next'
import Hero from '@/components/hero';
import DataSourcing from '@/components/dataSourcing';
import DataProcessing from '@/components/dataProcessing';
import BlueBox from '@/components/blueBox';
import GetInTouch from '@/components/getInTouch';
import Footer from '@/components/footer';
import { Text, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Hero />
      <DataSourcing />
      <DataProcessing />
      <BlueBox />
      <GetInTouch />
      <Footer />
    </main>
  )
}
