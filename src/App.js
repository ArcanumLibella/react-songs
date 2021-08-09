import Header from './layouts/Header'
import { selectSong } from './actions'
import { SongsList, SongDetails } from './components'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container max-screen-xl mx-auto pt-8">
        <div className="flex flex-col md:flex-row justify-between px-4">
          <SongsList/>
          <SongDetails/>
        </div>
      </main>
    </div>
  );
}

export default App;
