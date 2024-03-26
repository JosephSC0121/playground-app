import SideBar from '@renderer/components/Sidebar'
import BottomActionsCard from '@renderer/components/Card'
function MainPage(): JSX.Element {
  return (
    <div className="bg-primary flex flex-col h-screen">
      <SideBar />
      <BottomActionsCard />
    </div>
  )
}
export default MainPage
