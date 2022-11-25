import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import BodyPart from "./BodyPart";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ExerciseCard from "../Exercises/ExerciseCard";


const LeftArrow = () => {
    const {scrollPrev} =
        useContext(VisibilityContext);

    return <Typography onClick={() => scrollPrev()}>
        Left
    </Typography>
}

const RightArrow = () => {
    const {isLastItemVisible, scrollNext} = useContext(VisibilityContext);

    return <Typography disabled={isLastItemVisible}
                       onClick={() => scrollNext()}>
        Right
    </Typography>
}
export default function BodyPartsScrollbar({data, bodyPart, setBodyPart,isBodyParts}) {


    return <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data.map((item, index) => {
                return <Box key={index}
                            m={"0 40px"}
                >
                    {isBodyParts ?
                    < BodyPart item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}/>:<ExerciseCard exercise={item}/>
                    }
                </Box>
            })

        }    </ScrollMenu>
}