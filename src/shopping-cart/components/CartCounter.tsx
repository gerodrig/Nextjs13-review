'use client';

import { useEffect } from 'react';
// import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/';
import { increment, decrement, initCounterState} from '@/store/counter/counterSlice';

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}


const getApiCounter = async(): Promise<CounterResponse> => {
  const data = await fetch('/api/counter');
  return await data.json();
}

export const CartCounter = ({value = 0}: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // const [counter, setCounter] = useState(value);

  // const handleCounter = (value: number) => {
  //   if (counter + value < 0) return;

  //   setCounter(count + value);
  // };
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [value, dispatch]);

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
