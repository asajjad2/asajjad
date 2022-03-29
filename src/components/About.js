import Panda from "../img/coding.png"

function About(){
    return(
        <div className="about">
            <div className="aboutLeft">
                <div className="aboutLeftWrapper">
                    <h2 className="intro">Welcome, I am</h2>
                    <h1 className="name">Areeb.</h1>
                    <div className="titles">
                        <div className="titleWrapper">
                            <div className="titleItem">Front End Developer</div>
                            <div className="titleItem">Photographer</div>
                            <div className="titleItem">Computer Science Student</div>
                        </div>
                    </div>
                    <div className="description">
                        A second year Computer Science student at FAST-NUCES, I'm interested in web design & development, machine-learning and RTS games!
                    </div>
                </div>
            </div>
            <div className="aboutRight">
                <div className="aboutBg"></div>
                <img className="about-img" src={Panda}></img>
            </div>
        </div>
    );
}

export default About