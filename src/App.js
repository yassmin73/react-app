
import './styles.css';
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
       
        <SearchEngine defaultCity="Ahvaz"/>
      </div>
      <div className="git-source"> <a href="https://github.com/yassmin73/react-app.git"> Open-source code by</a> Yasmin</div>

    </div>
  );
}

