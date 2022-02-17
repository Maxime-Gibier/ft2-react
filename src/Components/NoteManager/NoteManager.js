import images from "../../images/images";
import "./NoteManager.css";
import React from "react";

const NoteManager = () => {
	return (
		<div className="block2">
			<div className="titre2">
				<span>
					<h2 className="notetitre">Note Manager</h2>
				</span>

				<span className="notes">
					<ul>
						<li>vérifier la surtension</li>
						<li>vérifier la tension</li>
					</ul>
				</span>
			</div>
		</div>
	);
};

export default NoteManager;
