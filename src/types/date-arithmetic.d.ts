declare module 'date-arithmetic' {
  export function milliseconds(date: Date, value?: number): Date
  export function seconds(date: Date, value?: number): Date
  export function minutes(date: Date, value?: number): Date
  export function hours(date: Date, value?: number): Date
  export function month(date: Date, value?: number): Date
  export function startOf(date: Date, unit: string, firstOfWeek?: number): Date
  export function endOf(date: Date, unit: string, firstOfWeek?: number): Date
  export function add(date: Date, value: number, unit: string): Date
  export function eq(dateA: Date, dateB: Date): boolean
  export function neq(dateA: Date, dateB: Date): boolean
  export function gte(dateA: Date, dateB: Date, unit?: string): boolean
  export function gt(dateA: Date, dateB: Date, unit?: string): boolean
  export function lte(dateA: Date, dateB: Date, unit?: string): boolean
  export function lt(dateA: Date, dateB: Date, unit?: string): boolean
  export function inRange(day: Date, min: Date, max: Date, unit?: string): boolean
  export function min(...dates: Date[]): Date
  export function max(...dates: Date[]): Date
} 