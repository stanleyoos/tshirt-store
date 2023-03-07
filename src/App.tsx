import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Container from './components/Container/Container'

const App = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  )
}

export default App
