import styles from './Product.module.scss'
import clsx from 'clsx'
import Button from '../Button/Button'
import { useState } from 'react'
import ProductImage from '../ProductImage/ProductImage'

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

  const prepareColorClassName = (color: string): string => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ]
  }

  const getPrice = (size: string): number => {
    const element: any = sizes.find((element) => element.name === currentSize)

    return basePrice + element.additionalPrice
  }

  const addButton = (e: any) => {
    e.preventDefault()
    console.log(`Name: ${title}`)
    console.log(`Price: ${getPrice(currentSize)}`)
    console.log(`Size: ${currentSize}`)
    console.log(`Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>
        <form onSubmit={addButton}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => {
                return (
                  <li key={size['name']}>
                    <button
                      onClick={() => setCurrenSize(size['name'])}
                      className={clsx(
                        size['name'] === currentSize && styles.active
                      )}
                      type="button"
                    >
                      {size['name']}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setCurrenColor(item)}
                    type="button"
                    className={clsx(
                      prepareColorClassName(item),
                      item === currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
}

export default Product
