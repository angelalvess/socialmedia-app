import { Outlet } from 'react-router-dom'

import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import TopBar from '@/components/shared/Topbar'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="flex h-full flex-1">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout
