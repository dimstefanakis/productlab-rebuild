'use client';

import Image from 'next/image'
import Hero from '@/components/hero';
import DataSourcing from '@/components/dataSourcing';
import DataProcessing from '@/components/dataProcessing';
import BlueBox from '@/components/blueBox';
import { Text, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Hero />
      <DataSourcing />
      <DataProcessing />
      <BlueBox />
    </main>
  )
}
