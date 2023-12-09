'use server';
export async function rateUp(id: number) {
  const res = await fetch(`http://127.0.0.1:8080/coffees/rate-up/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
