import { SidebarProvider } from './ui/sidebar'
import CustomTrigger from './ui/CustomTrigger'
import { AppSidebar } from './app-sidebar'

const Sidebar = () => {
  return (
    <div>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <CustomTrigger />
            </main>
          </SidebarProvider>
    </div>
  )
}

export default Sidebar
