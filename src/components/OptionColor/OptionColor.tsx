import clsx from 'clsx'
import styles from './OptionColor.module.scss'
import { OptionColorProps } from '../../interfaces'

const OptionColor = ({
  colors,
  setCurrentColor,
  currentColor,
}: OptionColorProps): JSX.Element => {
  const prepareColorClassName = (color: string): string => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ]
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((item: any) => (
          <li key={item}>
            <button
              onClick={() => setCurrentColor(item)}
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
  )
}

export default OptionColor
