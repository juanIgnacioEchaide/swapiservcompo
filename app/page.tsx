import './global.css'
import { DETAILS_ROUTE } from '@/utils/constants'
import Link from 'next/link'

export default async function Home() {

  return (
    <div className="home">
      <Link href={DETAILS_ROUTE.PEOPLE}><div className="home__button">PEOPLE</div></Link>
      <Link href={DETAILS_ROUTE.STARSHIP}><div className="home__button">STARSHIP</div></Link>
      <Link href={DETAILS_ROUTE.PLANET}> <div className="home__button">PLANET</div></Link>
      <Link href={DETAILS_ROUTE.FILMS}><div className="home__button">FILMS</div></Link>
      <Link href={DETAILS_ROUTE.SPECIES}><div className="home__button">SPECIES</div></Link>
      <Link href={DETAILS_ROUTE.VEHICLES}><div className="home__button">VEHICLES</div></Link>
    </div>
  )
}
