import { ThemeProvider } from "@/components/theme-provider"

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'

import { ConfigProvider } from 'antd'
import { IconGrid } from '@/components/IconGrid'
import { iconGridConfigs } from '@/config/icon-config'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'hsl(201, 100%, 41%)',
            },
          }}
        >
          <div className="flex flex-col h-screen mx-auto max-w-7xl">
            <div className="flex-1 py-8 px-2">
              {iconGridConfigs.map((gridProps) => (
                <IconGrid
                  key={gridProps.title}
                  {...gridProps}
                  icons={Object.values(gridProps.icons)}
                />
              ))}
            </div>
          </div>
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
