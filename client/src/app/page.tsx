"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  
  const [count , setCount] = useState<number>(50);
  const [arr, setArr] = useState<number[]>(new Array(count).fill(0));

  const changeLength = () => {
    setCount((prevCount) => prevCount + 50);
  };

  useEffect(() => {
    setArr(new Array(count).fill(0));
  }, [count]);
  
  const downRef = useRef<HTMLButtonElement>(null);
  const upRef = useRef<HTMLButtonElement>(null);

  const goDown = () => {
    upRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goUp = () => {
    downRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button onClick={goDown} ref={downRef} className="border rounded-xl w-16 bg-slate-200">
        Down
      </button>

      <article className="w-full h-full m-auto text-center">
        {arr.map((val, key) => {
          const adjustedKey = key + 50;
          return (
            <section className="inline-flex justify-around items-center m-auto" key={adjustedKey}>
              <img src={`https://picsum.photos/id/${adjustedKey}/200/200`} alt="" draggable={false} />
            </section>
          );
        })}
      </article>

      <button onClick={goUp} ref={upRef} className="border rounded-xl w-16 bg-slate-200">
        Up
      </button>
      <button onClick={changeLength} className="border bg-orange-600 text-white p-2">load more Image ...</button>
      <Link href="http://github.com/amadich" target="_blank">
      <button className="float-right p-5 ">Github/amadich</button>
      </Link>
    </>
  );
};

export default Home;
