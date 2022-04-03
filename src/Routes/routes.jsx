import { Routes, Route } from "react-router-dom";
import { Language } from "../components/language";
import { Library } from "../components/library";
import { Navbarlist } from "../components/Nav-list";
import { Navbarlang } from "../components/Nav-Lang";
import { Songs } from "../components/songs";
import styled from "styled-components";
import { Artists } from "../components/TopArtists/Artists";
import { Chart } from "../components/charts/Charts";
import { TopPlayLists } from "../components/TopPlaylistsSongs/TopPlayLists";

export const Routing = () => {
  const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    background-color: rgb(246, 246, 246);
  `;
  const Main = styled.div`
    width: 78%;
  `;
  return (
    <Container className="container">
      <Library />
      <Main>
        <Navbarlist />
        <Navbarlang />

        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/:language" element={<Language />} />
          <Route path="/topartists" element={<Artists />} />
          <Route path="/charts" element={<Chart />} />
          <Route path="/topplaylists" element={<TopPlayLists />} />
        </Routes>
      </Main>
    </Container>
  );
};
