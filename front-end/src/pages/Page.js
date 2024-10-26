import { Header } from "../components/header";
import { Features } from "../components/features";
import { Services } from "../components/services";
import { HowItWorks } from "../components/howItWorks";
import { About } from "../components/about";
import { Track } from "../components/track";
import { Testimonials } from "../components/testimonials";
import { Footer } from "../components/footer";
import { Main } from "../components/main";
import { Hero } from "../components/hero";



function Page()
{
  return(
    <>
        <Header />
        <Main>
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <About />
        <Track />
        <Testimonials />
      </Main>
      <Footer />
    </>
  );
}

export default Page;