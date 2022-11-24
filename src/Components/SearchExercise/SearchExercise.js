import React from "react"
import {Box, Stack, TextField, Typography} from "@mui/material";

export default function SearchExercise() {
    return <div>
        <Stack alignItems={"center"}
               mt={"50px"}
               justifyContent={"center"}
               p={"20px"}>
            <Typography fontWeight={700}
                        sx={{fontSize: {lg: "44px", xs: "30px"}}}
                        mb={"50px"}
                        textAlign={"center"}>
                Some great exercises you know and spend time
            </Typography>
        </Stack>
        <Box position={"relative"}
             mb={"72px"}
        >

            <TextField
                sx={{backgroundColor:"white"}}
                variant={"outlined"}
                value={""}
            height={"76px"}/>
        </Box>
    </div>
}