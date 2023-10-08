import { HomeLink } from '@/components/atoms/page/HomeLink'
import './global.css'
import { DETAILS_ROUTE } from '@/utils/constants'

export default async function Home() {

  return (
    <div className="home">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <HomeLink route={DETAILS_ROUTE.PEOPLE} title={'PEOPLE'} imageUrl={''} />
        <HomeLink route={DETAILS_ROUTE.STARSHIP} title={'STARSHIP'} imageUrl={''} />
        <HomeLink route={DETAILS_ROUTE.PLANET} title={'PLANET'} imageUrl={''} />
        <HomeLink route={DETAILS_ROUTE.FILMS} title={'FILMS'} imageUrl={''} />
        <HomeLink route={DETAILS_ROUTE.SPECIES} title={'SPECIES'} imageUrl={''} />
        <HomeLink route={DETAILS_ROUTE.VEHICLES} title={'VEHICLES'} imageUrl={''} />
      </div>
    </div>
  )
}
