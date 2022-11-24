import React from "react";
import {Box, Stack, Typography} from "@mui/material";

export default function Exercises({exercises, setExercises, bodyPart}) {
    console.log(exercises)
    return <Box id={"exercises"}

                mt={"40px"}
                p={"20px"}>
        <Typography variant={"h3"}>
            Showing Results
        </Typography>
        <Stack
            direction={"row"}
            sx={{gap: {lg: "110px", xs: "50px"}}}
        flexWrap={"wrap"} justifyContent={"center"}>
            {exercises.map( (value,index)=>{
                return<p key={index}>{value.name}</p>
            })}

        </Stack>
    </Box>
}