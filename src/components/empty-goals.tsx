// library
import { Plus } from 'lucide-react'

// assets
import letsStart from '@/assets/lets-start-illustration.svg'
import logo from '@/assets/logo-in-orbit.svg'

// components
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="Start-illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
