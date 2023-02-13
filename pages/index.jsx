import Head from "next/head";
import Footer from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import Wrapper from "../components/layout/Wrapper";
import CardWithImageSection from "../components/sections/CardWithImageSection";
import { CardWithTextSection } from "../components/sections/CardWithTextSection";
import { GivingSection } from "../components/sections/GivingSection";
import { HeroSection } from "../components/sections/HeroSection";
import { TMUNewsSection } from "../components/sections/TMUNewsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <HeroSection />
      <TMUNewsSection />
      <CardWithTextSection />
      <CardWithImageSection />
      <GivingSection />
      <Footer />

      {/* <ul>
        {menu.map((item, i) => (
          <Link href={item.href} key={i}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
      <h2 className="font-bold">Aldoooo</h2> */}
      {/* <Image
        width={1000}
        height={1000}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmI3S2yOgHM5ppJFOfsFx5tK16TBQzGyEuaN30jMJxBrOqIs7O&s"
        }
        alt={""}
      /> */}
      {/* <h1>Hello</h1> */}
      {/* <h2 className={inter.className}>
        Docs <span>-&gt;</span>
      </h2> */}
    </>
  );
}
