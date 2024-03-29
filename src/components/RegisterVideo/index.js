import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form>     
                <div>
                <button className="close-modal" onClick={() => setFormVisivel(false)}>
                    x
                </button>
                <input placeholder="Titulo do vídeo"/>
                <input placeholder="URL" />
                <button type="submit">
                    Cadastrar
                </button>
                </div>
             </form>
                )
            : false}
         </StyledRegisterVideo>
    )
}