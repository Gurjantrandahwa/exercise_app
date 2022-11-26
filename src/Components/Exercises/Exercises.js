import React, {useEffect, useState} from "react";
import {Box, Pagination, Stack, Typography} from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import {exerciseOptions, fetchData} from "../../Data/fetchData";

export default function Exercises({exercises, setExercises, bodyPart}) {

    const [currentPage, setCurrentPage] = useState(1)
    const exercisePerPage = 9;
    const indexOLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOLastExercise - exercisePerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1400, behavior: "smooth"})
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === "all") {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions);

            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }

            setExercises(exercisesData)
        }
        fetchExercisesData();
    }, [bodyPart])
    return <Box id={"exercises"}

                mt={"40px"}
                p={"20px"}>
        <Typography variant={"h4"} mb={"30px"} color={"#ff2625"} pl={"30px"}>
            Showing Results
        </Typography>
        <Stack
            direction={"row"}
            sx={{gap: {lg: "50px", xs: "30px"}}}
            flexWrap={"wrap"} justifyContent={"center"}>
            {currentExercises.map((exercise, index) => {
                return <ExerciseCard key={index}
                                     exercise={exercise}/>
            })}

        </Stack>
        <Stack mt={"100px"} alignItems={"center"} bgcolor={"white"}>
            {
                exercises.length > 9 && (
                    <Pagination
                        color={"secondary"}
                        shape={"rounded"}
                        defaultPage={1}
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={paginate}
                    />
                )
            }

        </Stack>
    </Box>
}