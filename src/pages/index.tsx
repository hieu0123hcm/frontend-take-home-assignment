import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

type Tab = 'all' | 'pending' | 'completed'

const Index = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>('all')

  const renderTabTrigger = (tab: Tab) => (
    <Tabs.Trigger
      className={`rounded-full px-[24px] py-[12px]  ${
        selectedTab === tab
          ? 'bg-[#334155]'
          : 'border border-[#E2E8F0] bg-white'
      }`}
      value={tab}
      onClick={() => setSelectedTab(tab)}
    >
      <p
        className={`text-[14px] font-[700] capitalize leading-5 ${
          selectedTab === tab ? 'text-white' : 'text-[#334155]'
        }`}
      >
        {tab}
      </p>
    </Tabs.Trigger>
  )

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="flex flex-col pt-10" defaultValue="all">
          <Tabs.List className="flex min-h-[44px] gap-2">
            {renderTabTrigger('all')}
            {renderTabTrigger('pending')}
            {renderTabTrigger('completed')}
          </Tabs.List>

          <div className="pt-10">
            <Tabs.Content className="TabsContent" value={selectedTab}>
              <TodoList status={selectedTab} />
            </Tabs.Content>
          </div>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
