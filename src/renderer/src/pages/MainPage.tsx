import SideBar from '@renderer/components/Sidebar'

function MainPage(): JSX.Element {
  return (
    <div className="bg-primary flex flex-col h-screen">
      <SideBar />
    </div>
  )
}
export default MainPage
