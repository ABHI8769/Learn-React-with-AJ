import image from "../src/assets/Abhijeet_Goswami.jpg"

function Card(){
    return(
        <div className="card">
            <img src= {image} className = "img" alt="profile-picture"></img>
            <h2 className="card-title">Abhijeet Goswami</h2>
            <p className="card-description">I am a Software Engineer Intern , @Mircosoft</p>
        </div>
    );
}

export default Card