import { ThemeProvider } from "@/components/theme-provider"

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'

import { ConfigProvider } from 'antd'

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
          <div className="flex flex-col h-screen">
            <div className="flex-1">
              Test
            </div>
          </div>
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
