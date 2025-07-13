import React, { useState, useEffect } from 'react';
import { 
  Coffee,
  Pizza,
  Sandwich,
  IceCream,
  Cake,
  Apple,
  Croissant,
  Cookie,
  Donut,
  Soup,
  Salad,
  Fish,
  Beef,
  Cherry,
  Grape,
  Banana
} from 'lucide-react';

export default function MenuLoader() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
const [isVisible, setIsVisible] = useState(true);
const [currentMessage,setCurrentMessage]=useState("")

  const foodIcons = [
    { icon: Pizza, name: 'Pizza', color: 'text-red-500' },
    { icon: Coffee, name: 'Coffee', color: 'text-yellow-600' },
    { icon: Sandwich, name: 'Sandwich', color: 'text-orange-500' },
    { icon: IceCream, name: 'Ice Cream', color: 'text-pink-400' },
    { icon: Cake, name: 'Cake', color: 'text-purple-500' },
    { icon: Apple, name: 'Apple', color: 'text-red-400' },
    { icon: Croissant, name: 'Croissant', color: 'text-yellow-500' },
    { icon: Cookie, name: 'Cookie', color: 'text-amber-600' },
    { icon: Donut, name: 'Donut', color: 'text-pink-500' },
    { icon: Soup, name: 'Soup', color: 'text-orange-600' },
    { icon: Salad, name: 'Salad', color: 'text-green-500' },
    { icon: Fish, name: 'Fish', color: 'text-blue-500' },
    { icon: Beef, name: 'Beef', color: 'text-red-600' },
    { icon: Cherry, name: 'Cherry', color: 'text-red-500' },
    { icon: Grape, name: 'Grape', color: 'text-purple-400' },
    { icon: Banana, name: 'Banana', color: 'text-yellow-400' }
  ];

  const loadingMessages = [
    "Preparing your menu...",
    "Cooking up something special...",
    "Mixing ingredients...",
    "Adding final touches...",
    "Almost ready to serve...",
    "Plating your favorites..."
  ];

useEffect(() => {
  const iconInterval = setInterval(() => {
    setIsVisible(false);          
    setTimeout(() => {
      setCurrentIconIndex((prev) => (prev + 1) % foodIcons.length); // 2. Change to next icon
      setIsVisible(true);         
    }, 150);
  }, 1000);
  
  return () => clearInterval(iconInterval);
}, []);

useEffect(() => {
  const messageInterval = setInterval(() => {
    setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
  }, 1000);
  
  return () => clearInterval(messageInterval);
}, []);

let FoodIcon=foodIcons[currentIconIndex].icon

  return (
   <div className='w-full mt-5 rounded-2xl h-48 border-2 outline-2 outline-amber-400 border-white  bg-amber-400 flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center'>
        {
          <FoodIcon className="text-white" />
        }
        <span className='text-white font-semibold text-lg'>{foodIcons[currentIconIndex].name}</span>
      </div>
      <h1 className='text-white font-semibold'>{loadingMessages[currentMessage]}</h1>
   </div>
  );
}