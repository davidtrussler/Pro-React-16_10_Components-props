import React from 'react'; 
import Summary from './Summary'; 

export default function App() {
  return (
  	<div>
	    <h1 className="bg-primary text-white text-center p-2">
	      Hello David
	    </h1>
	    <Summary names={['Bob', 'Brigitte', 'Dora']} />
    </div>
  ); 
}
