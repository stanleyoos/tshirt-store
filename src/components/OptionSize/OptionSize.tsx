import clsx from 'clsx'
import styles from './OptionSize.module.scss'

type Size = {
  name: string
  additionalPrice: number
}

interface Props {
  sizes: Size[]
  setCurrenSize: (size: string) => string
  currentSize: string
}

const OptionSize = ({
  sizes,
  setCurrenSize,
  currentSize,
}: Props): JSX.Element => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size: Size) => {
          return (
            <li key={size['name']}>
              <button
                onClick={() => setCurrenSize(size['name'])}
                className={clsx(size['name'] === currentSize && styles.active)}
                type="button"
              >
                {size['name']}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OptionSize
