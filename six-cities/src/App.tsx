import MainPage from './components/MainPage/MainPage'

interface AppProps {
  placesCount: number;
}

function App({ placesCount }: AppProps) {

  return (
    <MainPage placesCount={placesCount} />
  )
}

export default App
