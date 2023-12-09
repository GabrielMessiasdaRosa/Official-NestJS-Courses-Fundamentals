'use client';
import { rateUp } from './rate-up';

export interface CoffeesListProps {
  data: any;
}

export default function CoffeesList({ data }: CoffeesListProps) {
  return (
    <div className="text-white py-8 flex flex-col flex-wrap max-w-sm">
      <h1>Coffees</h1>
      <ul>
        {data?.length === 0 && <li>No coffees found</li>}
        {data?.map((coffee: any) => (
          <li key={coffee.id}>
            <a href={`/coffees/${coffee.id}`}>{coffee.name}</a>
            <p>Rate THis coffee </p>
            <p>{coffee.recommendations} likes</p>
            <button
              onClick={() => {
                console.log('rate up');
                rateUp(coffee.id);
              }}
              className="p-2 bg-green-500 text-white rounded-lg"
            >
              Up
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
