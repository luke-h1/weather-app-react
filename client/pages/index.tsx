import { FormScreen } from '../src/components/Form';
import WeatherState from '../src/context/WeatherState';

export default function Home() {
  return (
    <>
      <WeatherState>
        <FormScreen />
      </WeatherState>
    </>
  );
}
