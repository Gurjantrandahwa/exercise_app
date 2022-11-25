import React, {useState} from "react";
import {Box} from "@mui/material";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import SearchExercise from "../../Components/SearchExercise/SearchExercise";
import Exercises from "../../Components/Exercises/Exercises";


export default function Home() {
    const [bodyPart, setBodyPart] = useState("all")
    const [exercises, setExercises] = useState([])
    return <Box>
        <HeroBanner/>
        <SearchExercise
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
        />
        <Exercises
            setExercises={setExercises}
            exercises={exercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}/>
    </Box>
}