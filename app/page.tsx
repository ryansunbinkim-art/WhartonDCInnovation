import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { AboutDetails } from "@/components/about-details"
import { Stats } from "@/components/stats"
import { Speakers } from "@/components/speakers"
import { Attendees } from "@/components/attendees"
import { Agenda } from "@/components/agenda"
import { Sponsors } from "@/components/sponsors"
import { Reviews } from "@/components/reviews"
import { MoreInfo, Register } from "@/components/register"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <Hero />
      <main>
        <AboutDetails />
        <Stats />
        <Speakers />
        <Attendees />
        <Agenda />
        <Sponsors />
        <Reviews />
        <MoreInfo />
        <Register />
      </main>
      <SiteFooter />
    </>
  )
}
