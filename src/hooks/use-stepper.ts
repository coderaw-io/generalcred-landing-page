import { StepperContext, StepperContextProps } from '@/contexts/stepper-context'
import { useContext } from 'react'

export function useStepper(): StepperContextProps {
  return useContext(StepperContext)
}
