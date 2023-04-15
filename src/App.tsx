import { About, Header } from './components/sections'
import { DNITable } from './components'
import { Layout } from './layouts'
import { useDNIScraper } from './hooks'
import { DNIForm } from './components/DNIForm'

function App (): JSX.Element {
  const { dniInformation } = useDNIScraper()

  return (
    <Layout>
      <Header />

      <About />

      <section>
        <DNIForm />
      </section>

      <DNITable dniInformation={dniInformation} />
    </Layout>
  )
}

export default App
