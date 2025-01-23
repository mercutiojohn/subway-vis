import { FC } from 'react'
import { IconGridItem } from './IconGridItem'

export interface IconGridProps {
  title: string
  icons: string[]
  iconMap: Record<string, string>
  basePath: string
  iconClassName?: string
  iconBgClassName?: string
}

export const IconGrid: FC<IconGridProps> = ({ 
  title, 
  icons, 
  iconMap, 
  basePath, 
  iconClassName,
  iconBgClassName
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="grid gap-4" style={{
        gridTemplateColumns: 'repeat(auto-fill, 90px)'
      }}>
        {icons.map((icon) => (
          <IconGridItem
            key={icon}
            icon={icon}
            iconName={iconMap[icon]}
            basePath={basePath}
            className={iconBgClassName}
            iconClassName={iconClassName}
          />
        ))}
      </div>
    </div>
  )
} 