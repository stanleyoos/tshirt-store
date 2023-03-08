import OptionColor from '../OptionColor/OptionColor'
import OptionSize from '../OptionSize/OptionSize'
import Button from '../Button/Button'

type Size = {
  name: string
  additionalPrice: number
}

interface Props {
  addButton: any
  colors: string[]
  setCurrenSize: any
  setCurrenColor: any
  sizes: Size[]
  currentColor: string
  currentSize: string
}

const ProductForm = ({
  addButton,
  colors,
  setCurrenColor,
  currentColor,
  sizes,
  setCurrenSize,
  currentSize,
}: Props): JSX.Element => {
  return (
    <form onSubmit={addButton}>
      <OptionSize
        sizes={sizes}
        setCurrenSize={setCurrenSize}
        currentSize={currentSize}
      />
      <OptionColor
        colors={colors}
        setCurrenColor={setCurrenColor}
        currentColor={currentColor}
      />
      <Button>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm
