import OptionColor from '../OptionColor/OptionColor'
import OptionSize from '../OptionSize/OptionSize'
import Button from '../Button/Button'
import { ProductFormProps } from '../../interfaces'

const ProductForm = ({
  addButton,
  colors,
  setCurrentColor,
  currentColor,
  sizes,
  setCurrentSize,
  currentSize,
}: ProductFormProps): JSX.Element => {
  return (
    <form onSubmit={addButton}>
      <OptionSize
        sizes={sizes}
        setCurrentSize={setCurrentSize}
        currentSize={currentSize}
      />
      <OptionColor
        colors={colors}
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
      <Button>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm
