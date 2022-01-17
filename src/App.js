// App.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Post from './components/Post';

function App() {
  // create loading state
  const [isLoading, setIsLoading] = useState(false);
  const [imageRefs, setImageRefs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: 'https://api.nasa.gov/planetary/apod',
      method: 'GET',
      responseType: 'json',
      params: {
        start_date: '2022-01-02',
        end_date: '2022-01-08',
        api_key: 'X4WfjYooUbriBSQODcWwLkcOgGZuUlO2JrirMCZN'
      }
    })
      .then((response) => {
        setIsLoading(false);

        const apodArray = response.data;
        setImageRefs(apodArray);
      })
  }, [])

  return (
    <div className="App">
      <>
        <header className="wrapper">
          <h1>Spacestagram</h1>
          <p>Brought to you by NASA's Astrononmy Photo of the Day (APOD) API</p>
        </header>
        {isLoading ?
          <Loading />
          :
          <>
            <main>
              <Post images={imageRefs} />
            </main>
          </>

        }
      </>
    </div>
  );
}

export default App;
