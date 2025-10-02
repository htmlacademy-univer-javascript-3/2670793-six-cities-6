import { type FC } from 'react';
import MainPage from './components/MainPage/MainPage'

interface AppProps {
  placesCount: number;
}

const App: FC<AppProps> = ({ placesCount }) => {

  return (
    <MainPage placesCount={placesCount} />
  )
}

export default App
