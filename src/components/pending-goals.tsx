// libraries
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

// components
import { OutlineButton } from '@/components/ui/outline-button'

// http request functionality
import { createGoalCompletion } from '@/api/create-goal-completion'
import { getPendingGoals } from '@/api/get-pending-goals'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  })

  if (!data) return null

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 to-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
