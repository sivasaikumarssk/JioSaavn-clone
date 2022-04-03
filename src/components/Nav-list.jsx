import styled from "styled-components";
import { Buttons } from "./button";
import { useNavigate } from "react-router-dom";

export const Navbarlist = () => {
  const navigate = useNavigate();
  const List = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const TextButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin-right: 1rem;

    &:hover {
      background-color: rgb(236, 228, 228);
      padding: 0.5rem;
      border-radius: 1rem;
    }
  `;
  return (
    <List>
      <div>
        <TextButton>New Releases</TextButton>

        <TextButton onClick={() => navigate("/browse/charts")}>
          Charts
        </TextButton>

        <TextButton onClick={() => navigate("/browse/topplaylists")}>
          Top Playlists
        </TextButton>

        <TextButton>Podcasts</TextButton>
        <TextButton onClick={() => navigate("/browse/topartists")}>
          Top Artists
        </TextButton>
        <TextButton>Radio</TextButton>
      </div>
      <div>
        <Buttons>Surprise Me</Buttons>
      </div>
    </List>
  );
};
