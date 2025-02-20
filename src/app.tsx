// libraries
import { useQuery } from '@tanstack/react-query'

// components
import { CreateGoal } from '@/components/create-goal'
import { EmptyGoals } from '@/components/empty-goals'
import { Summary } from '@/components/summary'
import { Dialog } from '@/components/ui/dialog'

// http request functionality
import { getSummary } from '@/api/get-summary'

const timerController = 1000 * 60 // 60 seconds
export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: timerController,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}

/**
   * traditional request method
   * 
   * const [summary, setSummary] = useState<SummaryResponse | null>(null)
   * useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSummary(data.summary)
      })
  }, [])
   * 
   */
