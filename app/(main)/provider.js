import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { AppSidebar } from './_components/AppSideBar';

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <div>
        <AppSidebar />
      </div>
        {children}
    </SidebarProvider>
  )
}

export default DashboardProvider;