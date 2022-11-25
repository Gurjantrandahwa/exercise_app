import React, {useEffect, useState} from "react"
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import "./searchExercise.css";
import {exerciseOptions, fetchData} from "../../Data/fetchData";
import BodyPartsScrollbar from "../BodyParts/BodyPartsScrollbar";

export default function SearchExercise({
                                           setExercises, bodyPart, setBodyPart
                                       }) {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions
            );
            setBodyParts(["all", ...bodyPartsData])
        }
        fetchExercisesData();
    }, [])
    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
            )
            console.log(exerciseData)
            const searchExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch("");
            setExercises(searchExercises)
        }
    }
    return <div className={"search-exercise"}>
        <Stack alignItems={"center"}
               mt={"60px"}
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
                className={"search-exercise-input"}
                sx={{
                    input: {
                        fontWeight: "700",
                        border: "none",
                        borderRadius: "4px",
                        outline: "none"
                    },
                    width: {lg: "70%", xs: "350px"},
                    backgroundColor: "white",

                }}
                variant={"outlined"}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder={"Search"}
                type={"text"}
                value={search}
                height={"76px"}

            />
            <Button
                sx={{
                    bgcolor: "#FF2625",
                    color: '#fff',
                    textTransform: "none",
                    width: {lg: "175px", xs: "80px"},
                    fontSize: {lg: "20px", xs: "14px"},
                    height: "56px",
                    position: "absolute"
                }}
                onClick={handleSearch}
            >Search</Button>
        </Box>

        <Box sx={{
            position: "relative",
            width: "100%",
            p: "20px"
        }}>
            <BodyPartsScrollbar data={bodyParts}
                                bodyPart={bodyPart}
                                setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </div>
}