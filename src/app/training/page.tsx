"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Users,
  Zap,
  ArrowRight,
  Shield,
  Lock,
  Target,
  Database,
  Brain,
  Settings,
  Globe,
  Clock,
} from "lucide-react";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { COPY } from "../../content";

type Inputs = {
  inquiry_type: string;
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function LandingPage() {
  const hiddenRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      inquiry_type: "AI"
    }
  });

  // Animated counter for metrics
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  async function onSubmit(data: Inputs) {
    if (hiddenRef?.current?.value) {
      return;
    }
    try {
      setLoading(true);
      // Combine company and message
      const formattedMessage = `COMPANY: ${data.company}, ${data.message}`;

      const submitData = {
        inquiry_type: data.inquiry_type,
        name: data.name,
        email: data.email,
        message: formattedMessage,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });
      setLoading(false);
      toast.success(
        "Thank you for contacting us! We will get back to you shortly.",
      );
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white font-sans">
      {/* Header - Matching ProductLab.ai */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="flex w-full py-6 items-center px-[24px]">
          <Image
            src="/logo_white.png"
            alt="Logo"
            height={24}
            width={100}
            className="h-6 w-auto"
          />
          <div className="flex-1"></div>
          <Link href="#get-in-touch">
            <Button className="rounded-full py-6 bg-black text-white hover:bg-black active:bg-black">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Proof Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {COPY.hero.badges.map((badge, index) => (
              <div
                key={index}
                className="badge-dark px-4 py-2 rounded-full text-sm font-medium"
              >
                {badge}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The <span className="gradient-text">Human</span> Platform Powering Frontier AI
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {COPY.hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-md font-medium"
                onClick={scrollToContact}
              >
                {COPY.hero.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-400 font-medium">Trusted by industry leaders</p>
          </div>
          <div className="hidden md:flex justify-center items-center gap-12 lg:gap-16 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/uber_logo_clean.png"
                alt="Uber"
                width={100}
                height={40}
                className="h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/doordash_logo_clean.png"
                alt="DoorDash"
                width={140}
                height={40}
                className="h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/dynata_logo_clean.png"
                alt="Dynata"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/cint_logo_clean.png"
                alt="Cint"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
          </div>

          <div className="md:hidden overflow-hidden relative">
            <div className="flex animate-scroll">
              <div className="flex items-center gap-8 px-4 flex-shrink-0">
                <div className="w-16 h-8 flex items-center justify-center">
                  <Image
                    src="/uber_logo_clean.png"
                    alt="Uber"
                    width={60}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-24 h-8 flex items-center justify-center">
                  <Image
                    src="/doordash_logo_clean.png"
                    alt="DoorDash"
                    width={100}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-20 h-8 flex items-center justify-center">
                  <Image
                    src="/dynata_logo_clean.png"
                    alt="Dynata"
                    width={80}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-20 h-8 flex items-center justify-center">
                  <Image
                    src="/cint_logo_clean.png"
                    alt="Cint"
                    width={80}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
              </div>
              <div className="flex items-center gap-8 px-4 flex-shrink-0">
                <div className="w-16 h-8 flex items-center justify-center">
                  <Image
                    src="/uber_logo_clean.png"
                    alt="Uber"
                    width={60}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-24 h-8 flex items-center justify-center">
                  <Image
                    src="/doordash_logo_clean.png"
                    alt="DoorDash"
                    width={100}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-20 h-8 flex items-center justify-center">
                  <Image
                    src="/dynata_logo_clean.png"
                    alt="Dynata"
                    width={80}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
                <div className="w-20 h-8 flex items-center justify-center">
                  <Image
                    src="/cint_logo_clean.png"
                    alt="Cint"
                    width={80}
                    height={32}
                    className="max-h-6 w-auto opacity-70 filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We <span className="gradient-text">Deliver</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Featured Service - More Balanced Size */}
              <div className="lg:row-span-2">
                <Card className="card-dark border-gray-700 p-8 h-full group hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <Target className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                      {COPY.solutions.featured.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {COPY.solutions.featured.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Grid of Service Cards - 2x2 Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COPY.solutions.items.map((service, index) => {
                  const icons = [Database, Shield, Brain, Settings];
                  const Icon = icons[index] || Database;

                  return (
                    <Card
                      key={index}
                      className="card-dark border-gray-700 p-6 group hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                            <Icon className="w-5 h-5 text-blue-500" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - New Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{COPY.whoWeAre.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {COPY.whoWeAre.items.map((item, index) => (
              <Card key={index} className="card-dark border-gray-700 p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Users className="w-8 h-8 text-blue-500" />}
                    {index === 1 && <Globe className="w-8 h-8 text-blue-500" />}
                    {index === 2 && <Clock className="w-8 h-8 text-blue-500" />}
                    {index === 3 && <Settings className="w-8 h-8 text-blue-500" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why ProductLab */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="gradient-text">ProductLab</span>
          </h2>

          {/* Metrics - Now 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16" ref={metricsRef}>
            {COPY.whyProductLab.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {metricsVisible ? metric.value : "—"}
                </div>
                <div className="text-gray-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COPY.whyProductLab.items.map((item, index) => (
              <Card key={index} className="card-dark border-gray-700 p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                    {index === 0 && <Shield className="w-6 h-6 text-blue-500" />}
                    {index === 1 && <CheckCircle className="w-6 h-6 text-blue-500" />}
                    {index === 2 && <Zap className="w-6 h-6 text-blue-500" />}
                    {index === 3 && <Lock className="w-6 h-6 text-blue-500" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Who We <span className="gradient-text">Help</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {COPY.whoWeHelp.teams.map((team, index) => (
              <Card
                key={index}
                className="card-dark border-gray-700 p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{team}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section
        className="py-20 bg-gradient-to-br from-blue-900/20 to-gray-900"
        ref={contactRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* CTA Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to <span className="gradient-text">Scale Your AI?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {COPY.contactSection.subhead}
              </p>
            </div>

            {/* Contact Form */}
            <Card className="card-dark border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {COPY.contactSection.title}
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        {COPY.contactSection.fields.name}
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        {COPY.contactSection.fields.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                          },
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      {COPY.contactSection.fields.company}
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                      {...register("company", { required: true })}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      {COPY.contactSection.fields.project}
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and data needs"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 min-h-[120px]"
                      {...register("message", { required: true })}
                    />
                  </div>

                  <input
                    ref={hiddenRef}
                    type="hidden"
                    name="subject"
                    className="absolute left-0 top-0 opacity-0 h-0 w-0 -z-10"
                  />

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : COPY.contactSection.primaryCTA}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <div className="px-4" id="get-in-touch">
        <Footer theme="dark" hasIndent={false} />
      </div>
    </div>
  );
}
