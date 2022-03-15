import { useRef, useState } from "react";

export const Countdown = () => {
  const Ref: any = useRef(null);

  const [timer, setTimer] = useState(2);
  const [command, setCommand] = useState<any>([]);

  const startTimer = (e: any) => {
    setTimer((prev: number) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        //TODO Change this with your command
        console.log("fire");
        clearInterval(Ref.current);
        setCommand([]);
        return 0;
      }
    });
  };

  const clearTimer = (e: any) => {
    setTimer(2);
    if (Ref.current) {
      clearInterval(Ref.current);
    }
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const onClickReset = (data: any) => {
    clearTimer(2);
    setCommand((prev: any) => {
      return [...prev, data];
    });
  };

  return (
    <div className="App">
      <h2>{timer}</h2>
      {console.log(command)}
      <button onClick={() => onClickReset(3)}>Reset</button>
    </div>
  );
};
