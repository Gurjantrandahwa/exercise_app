import React from "react";
import {Stack} from "@mui/material";
import {ColorRing} from "react-loader-spinner";

export default function Loader() {
    return <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
        <ColorRing/>
    </Stack>
}