// libraries
import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

// components
import { getPendingGoals } from '@/api/get-pending-goals'
import { OutlineButton } from '@/components/ui/outline-button'

const timerController = 1000 * 60 // 60 seconds
export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: timerController,
  })

  if (!data) return null

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 to-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
