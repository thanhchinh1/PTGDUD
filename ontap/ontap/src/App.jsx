import {
  useState,
  useEffect,
  useReducer,
  useRef,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

/* ================= useState ================= */
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>useState</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

/* ================= useEffect ================= */
function EffectDemo() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h3>useEffect (check console)</h3>;
}

/* ================= useReducer ================= */
function reducer(state, action) {
  if (action === "inc") return state + 1;
  if (action === "dec") return state - 1;
  return state;
}

function ReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h3>useReducer</h3>
      <p>{count}</p>
      <button onClick={() => dispatch("inc")}>+</button>
      <button onClick={() => dispatch("dec")}>-</button>
    </>
  );
}

/* ================= useRef ================= */
function RefDemo() {
  const inputRef = useRef();
  return (
    <>
      <h3>useRef</h3>
      <input ref={inputRef} />
      <button onClick={() => alert(inputRef.current.value)}>Show value</button>
    </>
  );
}

/* ================= useMemo ================= */
function MemoDemo() {
  const [num, setNum] = useState(0);

  const double = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <>
      <h3>useMemo</h3>
      <p>{double}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
    </>
  );
}

/* ================= useCallback ================= */
function CallbackDemo() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <h3>useCallback</h3>
      <button onClick={increase}>{count}</button>
    </>
  );
}

/* ================= API: fetch ================= */
function FetchAPI() {
  const [data, setData] = useState([]);

  const load = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return (
    <>
      <h3>Fetch API</h3>
      <button onClick={load}>Load</button>
      {data.map((i) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </>
  );
}

/* ================= API: async/await ================= */
function AsyncAPI() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    setData(json);
  };

  return (
    <>
      <h3>Async / Await</h3>
      <button onClick={load}>Load</button>
      {data.map((i) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </>
  );
}

/* ================= API: axios ================= */
function AxiosAPI() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  return (
    <>
      <h3>Axios</h3>
      <button onClick={load}>Load</button>
      {data.map((i) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <>
      <h2>React Hooks + API (Simple Project)</h2>
      <Counter />
      <EffectDemo />
      <ReducerDemo />
      <RefDemo />
      <MemoDemo />
      <CallbackDemo />
      <FetchAPI />
      <AsyncAPI />
      <AxiosAPI />
    </>
  );
}
