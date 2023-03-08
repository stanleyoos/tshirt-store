import clsx from 'clsx'
import styles from './OptionColor.module.scss'

interface Props {
  colors: string[]
  setCurrenColor: (color: string) => string
  currentColor: string
}

const OptionColor = ({
  colors,
  setCurrenColor,
  currentColor,
}: Props): JSX.Element => {
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
  )
}

export default OptionColor
