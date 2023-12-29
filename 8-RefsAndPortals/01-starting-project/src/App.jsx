import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1}/>
        <TimerChallange title="Medium" targetTime={5}/>
        <TimerChallange title="Hard" targetTime={10}/>
        <TimerChallange title="Expert" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
