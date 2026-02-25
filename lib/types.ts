export type NailShape = 'square' | 'round' | 'oval' | 'almond' | 'stiletto' | 'coffin'
export type NailLength = 'short' | 'medium' | 'long' | 'extra long'
export type NailStyle =
  | 'natural'
  | 'french'
  | 'ombre'
  | 'solid'
  | 'glitter'
  | 'nail art'
  | '3D nail art'

export interface NailDesignInput {
  shape: NailShape
  length: NailLength
  colors: string
  style: NailStyle
  decorations: string[]
  details: string
}
