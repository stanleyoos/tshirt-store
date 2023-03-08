export type Size = {
  name: string
  additionalPrice: number
}

export interface OptionSizeProps {
  sizes: Size[]
  setCurrentSize: (size: string) => void
  currentSize: string
}

export interface ProductProps {
  name: string
  title: string
  basePrice: number
  colors: string[]
  sizes: Size[]
}

export interface OptionColorProps {
  colors: string[]
  setCurrentColor: (color: string) => void
  currentColor: string
}

export interface ProductFormProps {
  addButton: (e: any) => void
  colors: string[]
  setCurrentSize: (size: string) => void
  setCurrentColor: (color: string) => void
  sizes: Size[]
  currentColor: string
  currentSize: string
}
