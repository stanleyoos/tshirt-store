import styles from './Product.module.scss'
import { useMemo, useState } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductForm from '../ProductForm/ProductForm'
import { Size } from '../../interfaces'

interface ProductProps {
  name: string
  title: string
  basePrice: number
  colors: string[]
  sizes: Size[]
}

const Product = ({
  title,
  basePrice,
  colors,
  sizes,
  name,
}: ProductProps): JSX.Element => {
  const [currentColor, setCurrentColor] = useState<string>(colors[0])
  const [currentSize, setCurrentSize] = useState<string>(sizes[0]['name'])

  const getPrice = useMemo((): number => {
    const element: any = sizes.find((element) => element.name === currentSize)

    return basePrice + element.additionalPrice
  }, [currentSize])

  const addButton = (e: any): void => {
    e.preventDefault()
    console.log(`Name: ${title}`)
    console.log(`Price: ${getPrice}`)
    console.log(`Size: ${currentSize}`)
    console.log(`Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          addButton={addButton}
          colors={colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          sizes={sizes}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
        />
      </div>
    </article>
  )
}

export default Product
