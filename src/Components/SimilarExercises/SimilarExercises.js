import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import BodyPartsScrollbar from "../BodyParts/BodyPartsScrollbar";
import Loader from "../Loader/Loader";

export default function SimilarExercises({targetMuscle, equipmentMuscle}) {

    return <div>
        <Box sx={{mt: {lg: "10px", xs: "0"}}}>
            <Typography variant={"h4"} textAlign={"center"} paddingBottom={"40px"}>
                Exercise that target the same muscle group
            </Typography>
            <Stack

                   className={"scroll"}>
                {
                    targetMuscle.length ? <BodyPartsScrollbar data={targetMuscle}/>:
                        <Loader/>
                }
            </Stack>
            <Typography variant={"h4"} textAlign={"center"} marginTop={"50px"} paddingBottom={"40px"}>
                Exercise that target the same equipment
            </Typography>
            <Stack
                className={"scroll"}
                >
                {
                    equipmentMuscle.length ? <BodyPartsScrollbar data={equipmentMuscle}/>
                        : <Loader/>

                }
            </Stack>
        </Box>
    </div>

}