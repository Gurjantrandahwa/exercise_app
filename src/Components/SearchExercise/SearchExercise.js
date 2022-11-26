import React, {useEffect, useState} from "react"
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import {exerciseOptions, fetchData} from "../../Data/fetchData";
import BodyPartsScrollbar from "../BodyParts/BodyPartsScrollbar";

export default function SearchExercise({
                                           setExercises, bodyPart, setBodyPart
                                       }) {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    const [image, setImages] = useState([
        {
            img: "https://i.pinimg.com/564x/78/ec/17/78ec177c50fdfed042927126f0760c77.jpg"
        },
        {
            img: "https://i.pinimg.com/564x/50/c1/e1/50c1e1bb3953e047c7a5705c38995dd4.jpg"
        },
    ])
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
    return <div style={{padding: "20px"}}>
        <Stack
            mt={"65px"}
            justifyContent={"center"}
        >
            <Typography fontWeight={700}
                        sx={{fontSize: {lg: "35px", xs: "25px"}}}
                        mb={"50px"}
            >
                Some great exercises you should know and spend your time
            </Typography>
        </Stack>
        <Box position={"relative"}
             mb={"72px"}
        >

            <TextField
                className={"search-exercise-input"}
                sx={{
                    input: {
                        fontWeight: "600",
                        border: "none",
                        borderRadius: "4px",
                        outline: "none"
                    },
                    width: {lg: "74%", xs: "350px"},
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
                    width: {lg: "100px", xs: "80px"},
                    fontSize: {lg: "20px", xs: "14px"},
                    height: "56px",
                    position: "absolute"
                }}
                onClick={handleSearch}
            >Search</Button>
        </Box>

        <Box sx={{
            mt: "100px",
            position: "relative",
            width: "100%",

        }}>
            <BodyPartsScrollbar data={bodyParts}
                                images={image}
                                bodyPart={bodyPart}
                                setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </div>
}