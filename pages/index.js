import React from 'react';
import config from '../config.json'
import styled from 'styled-components'
import Menu from '../src/components/Menu/Index';
import { StyledTimeline } from '../src/components/Timelime';

function HomePage() {
  const estiloDaFonte = {
    //  backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

//  console.log(config.playlists)

  return (
    <>
    <div style={estiloDaFonte}>
    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
    <Header/>
    <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
      Conteúdo
    </Timeline>
  </div>
    </>
 
  );
}

export default HomePage

// function Menu() {
//   return (
//   <div>
//     Menu
//   </div>
//   )
// }
const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1}; 

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`

    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat center;
    /* background-image: url(${config.bg});*/
    height:20em;
`;
function Header() {
    return (
        <StyledHeader>
          <StyledBanner bg={config.bg}/>
            <section className="user-info">
                <img src='./img/perfilface.jpg' />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue ,...props}) {
  // console.log("Dentro do componete", props.playlists);
  const playlistsName = Object.keys(props.playlists);
  return (
    <StyledTimeline>
    {playlistsName.map((playlistsName) => {
      const videos = props.playlists[playlistsName];
      return (
        <section key={playlistsName}>
            <h2>{playlistsName}</h2>
            <div>
              {videos.filter((video) => {
               const titleNormalized = video.title.toLowerCase(); 
               const searchValueNormalized = searchValue.toLowerCase(); 
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
            return (
              <a key={video.url} href={video.url}>
              <img src={video.thumb}/>
              <span>
                {video.title}
              </span>
            </a>
            )
            })}
            </div>
          </section>
         
        )
      })}
    </StyledTimeline>
  )
}
