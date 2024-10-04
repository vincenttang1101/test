import { useTranslation } from '@/i18n'
import { BackToTop } from '@/shared/components/common/BackToTop/BackToTop'
import { HeroBanner } from '@/shared/components/common/HeroBanner'
import { PricingSection } from '@/shared/components/common/PricingSection'
import { DomainFinder } from '@/shared/components/pages/home/DomainFinder'
import { HostingSecurity } from '@/shared/components/pages/home/HostingSecurity'
import { HostingServices } from '@/shared/components/pages/home/HostingServices'
import { LatestBlog } from '@/shared/components/pages/home/LatestBlog'
import { Testimonial } from '@/shared/components/pages/home/Testimonial'
import { LanguageEnum } from '@/shared/enums/common/language.enum'

type HomePageProps = {
  params: {
    lng: LanguageEnum
  }
}

export default async function HomePage({ params: { lng } }: HomePageProps) {
  const { t: tHome } = await useTranslation(lng, 'home')

  return (
    <section>
      <div className='z-[-1] bg-[#F6F6F6]'>
        <HeroBanner tHome={tHome} />
        <DomainFinder />
      </div>
      <HostingServices />
      {/* <PricingSection /> */}
      <HostingSecurity />
      <Testimonial />
      <LatestBlog />
      <BackToTop />
    </section>
  )
}
