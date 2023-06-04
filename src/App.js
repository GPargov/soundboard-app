/** @format */
import logo from "./img/logo.png";
import data from "./data";
import { useState } from "react";
import Character from "./components/Character";

function App() {
	const [characters, setCharacters] = useState(data);
	const [activeChar, setActiveChar] = useState(characters[0]);
	return (
		<div className="App">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<ul className="characters-con">
				{characters.map((char) => {
					const { name, image, id, sounds } = char;
					return (
						<li
							className={`${activeChar.id === id ? "active" : ""}`}
							key={id}
							onClick={() => {
								setActiveChar(char);
							}}>
							<div className="characters">
								<img src={image} alt={name} />
							</div>
						</li>
					);
				})}
			</ul>
			<Character {...activeChar} />
		</div>
	);
}

export default App;
