import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) =>
    setMinute(+event.currentTarget.value);
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) =>
    setHour(+event.currentTarget.value);
  return (
    <div>
      <input
        value={minute}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hour}
        onChange={onHourChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
