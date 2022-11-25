import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import BodyPartsScrollbar from "../BodyParts/BodyPartsScrollbar";
import Loader from "../Loader/Loader";

export default function SimilarExercises({targetMuscle, equipmentMuscle}) {

    return <div>
        <Box sx={{mt: {lg: "50px", xs: "0",position:"relative"}}}>
            <Typography variant={"h4"} textAlign={"center"}>
                Exercise that target the same muscle group
            </Typography>
            <Stack direction={"row"}
                   sx={{p: "20px"}}>
                {
                    targetMuscle.length ? <BodyPartsScrollbar data={targetMuscle}/>:
                        <Loader/>
                }
            </Stack>
            <Typography variant={"h4"} textAlign={"center"}>
                Exercise that target the same equipment
            </Typography>
            <Stack direction={"row"}
                   sx={{p: "20px"}}>
                {
                    equipmentMuscle.length ? <BodyPartsScrollbar data={equipmentMuscle}/>:
                        <Loader/>
                }
            </Stack>
        </Box>
    </div>

}