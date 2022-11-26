import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
    return <div className={"footer-wrapper"}>
        <Box mt={"80px"} bgcolor={"rgba(255,0,0,0.71)"} height={"60px"}>
            <Stack  alignItems={"center"}>

                <Typography  variant={"h5"}
                          mt={"10px"}
                >
                    A website which gives you motivation towards fitness
                </Typography>
            </Stack>
        </Box>
        <Box>

            <Link to={"/"}>
                <img
                    className={"footer-img"}
                    src={"https://i.pinimg.com/564x/a6/20/ab/a620ab777c73fbdd9195331230a00a5f.jpg"}
                    alt={"logo"}/>
            </Link>
        </Box>
    </div>
}
