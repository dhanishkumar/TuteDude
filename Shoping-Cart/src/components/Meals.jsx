import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'm2',
    name: 'Burger',
    description: 'Juicy grilled beef patty',
    price: 12.5,
    image: 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'm3',
    name: 'Pizza',
    description: 'Loaded with cheese and pepperoni',
    price: 15.0,
    image: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'm4',
    name: 'Pasta',
    description: 'Creamy white sauce pasta',
    price: 18.0,
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'm5',
    name: 'Salad',
    description: 'Healthy mixed vegetable salad',
    price: 10.0,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];


const Meals = () => {
  return (
    <section className="p-4">
      {DUMMY_MEALS.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </section>
  );
};

export default Meals;
