import React from "react";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return <div>
        <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"}
               sx={{
                   gap: {sm: '122px', xs: '40px'},
                   mt: {sm: "32px", xs: "20px"},
                   justifyContent: "none"
               }} px={"20px"}>
            <Link to={"/"}>
                <img
                    className={"logo"}
                    src={"https://i.pinimg.com/564x/a5/91/2a/a5912af2cb43857c5149a3745ad7afc2.jpg"}
                    alt={"logo"} />
            </Link>

            <Stack direction={"row"} gap={"40px"} fontSize={"22px"} alignItems={"flex-end"}>
                <Link to={"/"}>
                    Home
                </Link>
                <a href={"#exercises"}>
                    Exercises
                </a>
            </Stack>
        </Stack>
    </div>
}