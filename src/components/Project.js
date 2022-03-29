function Project(prompt){

    let css = {
        "backgroundImage":`url("${prompt.def.imgSrc}")`
    }

    let redirect = prompt.def.url;

    return (
        <a className={`Project ${prompt.def.className}`} href={redirect} style={css}>
            <h2 className="hide">{prompt.def.name}</h2>
            {/* <img src={prompt.def.imgSrc}/> */}
            <div className="hoveredDetails hide">
                <p>{prompt.def.prompt}</p>
            </div>
        </a>
    );
}

export default Project