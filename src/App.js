import './App.css';
import { useState } from 'react';
import { dataHotel } from './dataHote';

function App() {

	const[hotel, setHotel] = useState(dataHotel);
	const removeHotel =(id)=>{
		const newHotel = hotel.filter(itemNewHotel => itemNewHotel.id !== id)
		setHotel(newHotel)
	}

	const [showText, setShowText] = useState(false)
	const btnMoreText=(item)=>{
		item.showMore = !item.showMore
		setShowText (!showText)
	}

	const reloadPage =()=>{
		window.location.reload()
	}

	return (
		<div className='thema_block'>
		<div  className='container'>
			<h1>New York City top {hotel.length} Hotels</h1>

			{hotel.map((item =>{
				const { id, hotelName, description, image, source, showMore } = item;
				return(
				<div className='container_flex' key={id}>
					
						<h2>{id} - {hotelName}</h2>
						<p>{showMore? description + "  ": description.substring(0,230) + " ... "}
						<button onClick={()=> btnMoreText(item)} className='btn_more'>{showMore? "show less": " show more"}</button>
						</p>
						<img src={image} alt="Hotel"/>
						<p>Source: <a href={source} target="_blank" rel="noreferrer">Booking.com</a></p>
					
						<button className='btn_remove' onClick={()=> removeHotel(id)}>Remove</button>
					
				</div>
				)
			}))}
			<div  className='btn_reload'>
				<button className='btn_remove' onClick={()=> reloadPage()}>Reload page</button>
			</div>
		</div>
		</div>
	);
}

export default App;
