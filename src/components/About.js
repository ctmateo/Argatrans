import React from "react";



const About = () => {
    return(
        <div className={"about-section"}>
            {/* <iframe className="video-one" title="vimeo-player" src="https://player.vimeo.com/video/742913311?h=c65981fdd2" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
            <div className="about-titlezone"></div>
            <div className="about-titlezone"><span>DISFRUTA DE LA NUEVA <br/> PLATAFORMA DE PAUSAS ACTIVAS DE 
            ARGATRANS</span></div>
            <div className="content"><span>Sesiones de actividad física  desarrolladas con una duración continua mínima de 10 minutos,  durante la jornada laboral, mañana y tarde, que ayudarán a recuperar energía, mejorar el desempeño y eficiencia en el trabajo, además de prevenir enfermedades causadas por posturas prolongadas, movimientos repetitivos y contribuye a reducir el riesgo cardiovascular.  </span> </div>
            <div className="wrap-content"><div className="button-one"><div className="text">Leer más</div><div className="icon"><img src="./icons\icon.png" alt="icon-back"/></div></div><div className="button-two"><a href="/">Quiero ejercitarme ahora</a></div></div>
        </div>
        
    )

}
export default About