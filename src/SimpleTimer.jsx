import React from "react"

function Timer() {
  const [min, setMin] = useState(59);
  const [sec, setSec] = useState(59);
  const time = useRef(3599); // 59분 59초
  const timerId = useRef(null);
  
  useEffect(() => {
    timerId.current = setInterval(() => {
        setMin(parseInt(time.current / 60));
        setSec((time.current % 60) > 9 ? (time.current % 60) : `0${time.current % 60}`);
        time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (window.performance) {
        if (performance.navigation.type === 1) {
            if (window.confirm("새로고침을 하면 현재까지의 플레이 기록이 초기화 됩니다.")) {
                window.sessionStorage.clear();
                window.location.href = "/";
            };
        }
    }
  }, []);

  useEffect(() => {
    if (time.current <= 0) {
        alert("제한 시간이 초과되었습니다. 처음 페이지로 돌아갑니다");
        window.clearInterval(timerId.current);
        window.sessionStorage.clear();
        window.location.href = "/"
    }
  }, [sec]);
  
  return (
    <>
      <div>{min}:{sec}</div>
    </>
  )
}

export default Timer;
