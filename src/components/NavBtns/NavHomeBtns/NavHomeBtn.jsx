import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavHomeBtns.css';

export default function NavHomeA() {
	return (
		<Link to='/' className='HomeNavLink'>
			<div className='HomeCircle'></div>
		</Link>
	);
}
