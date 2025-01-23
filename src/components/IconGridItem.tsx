import { FC } from 'react'
import * as Icons from '@/assets/icons'  // 假设所有SVG组件都从这里导入
import { cn } from '@/lib/utils'

interface IconGridItemProps {
  icon: string
  iconName: string
  basePath: string
  className?: string
  iconClassName?: string
}

export const IconGridItem: FC<IconGridItemProps> = ({ 
  icon, 
  iconName, 
  basePath, 
  className,
  iconClassName
}) => {
  // 动态获取SVG组件
  const SvgComponent = (Icons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[icon]

  return (
    <div className={cn("flex flex-col items-center p-4 border rounded", className)}>
      {SvgComponent ? (
        <SvgComponent 
          className={cn("size-20 mb-2", iconClassName)}
        />
      ) : (
        <img
          src={`${basePath}/SVG/${icon}.svg`}
          alt={iconName}
          className={cn("size-18 mb-2", className)}
        />
      )}
      <span className="text-sm">{iconName}</span>
      <span className="text-xs text-gray-500">{icon}</span>
    </div>
  )
} 