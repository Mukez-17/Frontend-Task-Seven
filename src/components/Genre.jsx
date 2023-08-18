import React from "react";

const Genre = () => {
    return(
        <div className="genre">
            <h2>Genre</h2>
            <div className="col">
                <div className="card">
                    <h3>Action</h3>
                    <p>Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.</p>
                </div>
                <div className="card">
                    <h3>Sci-fi</h3>
                    <p>Science fiction is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science.</p>
                </div>
                <div className="card">
                    <h3>Drama</h3>
                    <p>Thriller is a genre of fiction with numerous, often overlapping, subgenres, including crime, horror, detective fiction and have more anxeity.</p>
                </div>
            </div>
        </div>
    );
}

export default Genre;