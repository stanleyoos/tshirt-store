import styles from './Product.module.scss'
import { useState } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductForm from '../ProductForm/ProductForm'

type Size = {
  name: string
  additionalPrice: number
}

interface Product {
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
}: Product): JSX.Element => {
  const [currentColor, setCurrenColor] = useState<string>(colors[0])
  const [currentSize, setCurrenSize] = useState<string>(sizes[0]['name'])

  const getPrice = (): number => {
    const element: any = sizes.find((element) => element.name === currentSize)

    return basePrice + element.additionalPrice
  }

  const addButton = (e: Event): void => {
    e.preventDefault()
    console.log(`Name: ${title}`)
    console.log(`Price: ${getPrice()}`)
    console.log(`Size: ${currentSize}`)
    console.log(`Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          addButton={addButton}
          colors={colors}
          setCurrenColor={setCurrenColor}
          currentColor={currentColor}
          sizes={sizes}
          setCurrenSize={setCurrenSize}
          currentSize={currentSize}
        />
      </div>
    </article>
  )
}

export default Product
