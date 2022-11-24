import React from "react";
import {Box, Button, Typography} from "@mui/material";
import "./Herobanner.css";


export default function HeroBanner() {
    return <div className={"home-banner"}>
        <Box
            sx={{
                mt: {lg: "212px", xs: "70px"},
                ml: {sm: "5px"}
            }}
            position={"relative"}
            p={"20px"}>
            <Typography
                color={"#FF2625"}
                fontSize={"26px"}
                fontWeight={"600"}>
              For Fitness Freaks
            </Typography>
            <Typography fontWeight={700}
                        sx={{
                            fontSize: {lg: "44px", xs: "40px"}
                        }}
                        mb={"23px"}
                        mt={"30px"}>
            Face,Smile and Repeat
            </Typography>
            <Typography
                fontSize={"22px"}
                lineHeight={"35px"}
                mb={3}>
                Check out the most effective exercises
            </Typography>
            <Button
                sx={{
                   backgroundColor:"#FF2625",
                    padding:"10px"
                }}
                href={"#exercises"}
                variant={"contained"}
                color={"error"}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color={"#ff2625"}
                sx={{
                    opacity: 0.2,
                    display: {lg: "block", xs: "none"}
                }}
                fontSize={"120px"} mt={3}>
                Let's Exercise
            </Typography>
            <img
                className={"home-banner-img"}
                src={"https://i.pinimg.com/564x/28/a6/3c/28a63cb8ee874029b2ac4ca03bc757ab.jpg"}
                alt={""}
            />
        </Box>
    </div>
}