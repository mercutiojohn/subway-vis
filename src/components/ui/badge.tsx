import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { BayAllocationStatus } from "@/models/BayAllocationsWeekly";

export const reserveStatusColors = {
  [BayAllocationStatus.DRAFT]: 'hsl(215, 100%, 61%)',
  [BayAllocationStatus.RESERVED]: 'hsl(39, 100%, 50%)',
  [BayAllocationStatus.CHECK_IN]: 'hsl(120, 61%, 50%)',
  [BayAllocationStatus.ENDED]: 'hsl(210, 14%, 53%)',
  [BayAllocationStatus.CANCELLED]: 'hsl(0, 0%, 100%)'
} as const;

const reserveStatusStyles = () => {
  return cn(
    "rounded-full text-primary-foreground border-[#00000023]",
    "flex items-center gap-1 before:content-[''] before:w-2 before:h-2 before:bg-white before:rounded-full"
  );
};

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        // --- 
        'reserve': reserveStatusStyles(),
        // ---
        'equipment_Normal': cn(
          'border-2 py-2',
          'border-green-600'
        ),
        'equipment_Abnormal': cn(
          'border-2 py-2',
          'border-red-600'
        )
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div 
    className={cn(badgeVariants({ variant }), className)}
    {...props} />
  )
}

export { Badge, badgeVariants }
