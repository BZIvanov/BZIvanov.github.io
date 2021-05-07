const data = [
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed',
];

const items = ['destination', 'price', 'status'];
const sortItem = items[Math.floor(Math.random() * 3)];

class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

const ticketsArray: Ticket[] = data.map((t: string) => {
  const splited: string[] = t.split('|');
  const price: number = Number(splited.splice(1, 1));
  return new Ticket(splited[0], price, splited[1]);
});

const sortedArray = ticketsArray.sort((a: Ticket, b: Ticket) => {
  if (sortItem !== 'price') {
    return a[sortItem].localeCompare(b[sortItem]);
  }

  return a[sortItem] - b[sortItem];
});

console.log(sortedArray);
