"use client";

import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import DataSourcing from "@/components/dataSourcing";
import DataProcessing from "@/components/dataProcessing";
import BlueBox from "@/components/blueBox";
import GetInTouch from "@/components/getInTouch";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main style={{ paddingRight: "24px", paddingLeft: "24px" }}>
      <Hero />
      <DataSourcing />
      <DataProcessing />
      <BlueBox />
      <GetInTouch />
      <Footer />
    </main>
  );
}
