import React from "react";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";

export default function Navbar() {
    return <div>
        <Stack direction={"row"} justifyContent={"space-around"}
               sx={{
                   gap: {sm: '122px', xs: '40px'},
                   mt: {sm: "32px", xs: "20px"},
                   justifyContent: "none"
               }} px={"20px"}>
            <Link to={"/"}>
                <img
                    src={"https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM="}
                    alt={"logo"} width={'50px'} height={'50px'}/>
            </Link>

            <Stack direction={"row"} gap={"40px"} fontSize={"24px"} alignItems={"flex-end"}>
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