import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import BodyPart from "./BodyPart";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ExerciseCard from "../Exercises/ExerciseCard";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

const LeftArrow = () => {

    const {scrollPrev} =
        useContext(VisibilityContext);

    return <Typography onClick={() => scrollPrev()}
                       sx={{
                           color: "#ff2625",
                           position: "absolute",
                           left: "0px",
                           top: "-50px",
                           cursor: "pointer"
                       }}>
        <KeyboardBackspaceIcon fontSize={"large"}/>
    </Typography>
}

const RightArrow = () => {
    const {isLastItemVisible, scrollNext} = useContext(VisibilityContext);

    return <Typography disabled={isLastItemVisible}
                       sx={{
                           color: "#ff2625",
                           position: "absolute",
                           left: "40px",
                           top: "-50px",
                           cursor: "pointer"
                       }}
                       onClick={() => scrollNext()}>
        <EastIcon fontSize={"large"}/>
    </Typography>
}

export default function BodyPartsScrollbar({data, images, bodyPart, setBodyPart, isBodyParts}) {
    console.log(images)

    return <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data.map((item, index) => {
                return <Box key={index}
                            m={"0 20px"}
                >
                    {isBodyParts ?
                        < BodyPart item={item}
                                   images={images}
                                   bodyPart={bodyPart}
                                   setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>
                    }
                </Box>
            })

        }    </ScrollMenu>
}