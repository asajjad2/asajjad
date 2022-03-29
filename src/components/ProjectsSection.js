import Project from "./Project";
import RapidoImg from "../img/rapido.png"
import FurnitureImg from "../img/furnitureStore.png"
import CalcImg from "../img/calc.png"
import WeatherImg from "../img/weatherApp.png"
import ListImg from "../img/shoppingList.png"

const ProjectInfoArr = [
    {
        "name" : "Rapido",
        "prompt" : "Website for an imaginary fast-food chain with all popular features of a modern landing page - implemented using HTML and CSS.",
        "imgSrc" : `${RapidoImg}`,
        "className" : "gird-col-span-2",
        "url" : "https://asajjad2.github.io/rapido/index.html"
    },{
        "name" : "Random Furniture Brand",
        "prompt" : "Landing Page for a furniture brand - learning & implementing gradients, animations and responsiveness with SCSS.",
        "imgSrc" : `${FurnitureImg}`,
        "className" : "gird-col-span-2"
    },{
        "name" : "Calculator",
        "prompt" : "Basic Calculator using functions, array-manipulations and eval().",
        "imgSrc" : `${CalcImg}`,
        "className" : "",
        "url" : "https://codepen.io/Asajjad2/full/YzYQrev"
    },{
        "name" : "Weather Search Application",
        "prompt" : "Using Weather API to display weather conditions of searched city.",
        "imgSrc" : `${WeatherImg}`,
        "className" : ""
    },{
        "name" : "Shopping List Application",
        "prompt" : "Application to help log-in to a shopping list, add, edit and delete items to it - implemented using vanilla javascript classes, functions and DOM-manipulations.",
        "imgSrc" : `${ListImg}`,
        "className" : "gird-col-span-2"
    }
];

function ProjectsSection(){
    return (
        <div className="ProjectsSection">
            <h1>Recent Work</h1>
            <div className="projectsGrid">
                <Project def = {ProjectInfoArr[4]}/>
                <Project def = {ProjectInfoArr[3]}/>
                <Project def = {ProjectInfoArr[2]}/>
                <Project def = {ProjectInfoArr[1]}/>
                <Project def = {ProjectInfoArr[0]}/>
            </div>
            <button>See More</button>
        </div>
    );
}

export default ProjectsSection