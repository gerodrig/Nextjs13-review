'use client';

import { SimpleWidget } from './SimpleWidget';
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget
        title={isCart.toString()}
        subTitle="Added Products"
        label="Counter"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
