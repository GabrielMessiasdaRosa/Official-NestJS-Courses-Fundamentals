import CoffeesList from '@/components/coffees-list';

async function getData() {
  const res = await fetch('http://127.0.0.1:8080/coffees', {
    next: {
      revalidate: 1,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <CoffeesList data={data} />;
}
