import Header from '../components/Header';
import Form from '../components/Form';
import WeatherState from '../context/WeatherState';

export default function Home() {
  return (
    <>
      <WeatherState>
        <Header />
        <Form />
      </WeatherState>
    </>
  );
}
