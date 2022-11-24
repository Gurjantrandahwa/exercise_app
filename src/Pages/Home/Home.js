import React from "react";
import {Box} from "@mui/material";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import SearchExercise from "../../Components/SearchExercise/SearchExercise";

export default function Home() {
    return <Box>
        <HeroBanner/>
        <SearchExercise/>
    </Box>
}