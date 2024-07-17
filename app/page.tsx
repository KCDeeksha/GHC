
import BestSellers from "@/components/BestSellers";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Image from "next/image";
import React from "react";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <Category />
      <BlogSection />
      
    </main>
  );
}
