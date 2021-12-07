import styled from "styled-components";
import { WaterfallGrid } from "react-waterfall-grid";
import { useMediaQuery } from "react-responsive";
import Addbutton from "../../../components/addbutton";
import outbox from "./index.css";

import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
// You are free to add as many grid contents as you want. Here, you see only 4 pictures.
import Image1 from "../../../image/hack.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";

const ParentContainer = styled.div`
  width: 100%;
  background-color: #121212;
`;

const Image = styled.img`
  object-fit: cover;
`;

export default function App() {
  // Boolean - True if phone
  const isPhone = useMediaQuery({ query: "max-width: 480px" });

  // List of images <img>
  const imagesList = [Image1, Image2, Image3, Image4].map((imagePath) => (
    <Image
      key={imagePath}
      style={{ width: isPhone ? "200px" : "300px" }}
      src={imagePath}
      alt={imagePath}
    />
  ));

  return (
    <div class="outbox">
      <ParentContainer id="parent-container">
        <WaterfallGrid
          children={imagesList}
          childWidth={isPhone ? 200 : 300}
          styleGridContainer={{
            width: "100%",
            position: "relative",
            justifyContent: "center",
          }}
        />
      </ParentContainer>
      <div class="addbtn">
        <Addbutton></Addbutton>
      </div>
    </div>
  );
}
