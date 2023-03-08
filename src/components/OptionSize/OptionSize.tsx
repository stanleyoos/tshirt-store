import clsx from 'clsx'
import styles from './OptionSize.module.scss'
import { Size } from '../../interfaces'
import { OptionSizeProps } from '../../interfaces'

const OptionSize = ({
  sizes,
  setCurrentSize,
  currentSize,
}: OptionSizeProps): JSX.Element => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size: Size) => {
          return (
            <li key={size['name']}>
              <button
                onClick={() => setCurrentSize(size['name'])}
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
