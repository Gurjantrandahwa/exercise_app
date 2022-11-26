import React from "react";
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import "./ExerciseCard.css";


export default function ExerciseCard({exercise}) {
    return <div className={"exerciseCard"}>
        <Link to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading={"lazy"}/>

            <Stack direction={"row"}>
                <Button sx={{
                    ml: "21px",
                    color: "#fff",
                    backgroundColor: "#ffa9a9",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize"
                }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{
                    ml: "21px",
                    color: "#fff",
                    backgroundColor: "#f0c869",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize"
                }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                maxWidth={"350px"}
                mt={"20px"}
                ml={"21px"}
                color={"white"}
                fontWeight={"bold"}
                pb={"10px"}
                textTransform={"capitalize"}
                fontSize={"18px"}>
                {exercise.name}
            </Typography>

        </Link>
    </div>
}