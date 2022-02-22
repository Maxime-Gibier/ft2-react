import "./NoteManager.css";
import React from "react";

const NoteManager = () => {
	return (
		<div className="block2">
			<h2 className="notetitre">Note Manager</h2>
			<ul className="notes">
				<li className="index4">Vérifier la surtension</li>
				<li className="index3">Vérifier la temperature de la turbine</li>
			</ul>
		</div>
	);
};

export default NoteManager;
