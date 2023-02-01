import { InternalLayout } from './components/layouts/InternalLayout'
import { EstoqueProvider } from './contexts/EstoqueContext'
import EstoquePage from './pages/EstoquePage'

function App() {
  return (
    <InternalLayout>
      <EstoqueProvider>
        <EstoquePage />
      </EstoqueProvider>
    </InternalLayout>
  )
}

export default App
