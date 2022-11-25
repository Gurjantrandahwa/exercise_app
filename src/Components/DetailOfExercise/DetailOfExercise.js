import React from "react";
import {IconButton, Stack, Typography} from "@mui/material";

export default function DetailOfExercise({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

    const extraDetail = [
        {
            icon: "https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif",
            name: bodyPart
        },
        {
            icon: "https://i.pinimg.com/564x/68/7b/3b/687b3b873f9c1b4447f88fd4a7510b04.jpg",
            name: target
        },
        {
            icon: "https://i.pinimg.com/564x/a8/4f/1b/a84f1b7e8eb9cac1e651f41a3da4336f.jpg",
            name: equipment
        },
    ]
    return <div>
        <Stack gap={"60px"}
               sx={{flexDirection: {lg: 'row'}, p: "20px", alignItems: "center"}}>
            <img src={gifUrl} alt={name} loading={"lazy"} height={"550px"} width={"450px"}/>
            <Stack
                sx={{gap: {lg: "35px", xs: "20px"}}}>
                <Typography textTransform={"capitalize"} variant={"h4"} color={"#FF2625"}>
                    {name}
                </Typography>
                <Typography variant={"h6"}>
                    Exercises keep your body fit and healthy. So, {name}{" "}
                    is one of the best exercise to target your {target}.{" "}
                    It will help you improve mental and physical health.
                </Typography>
                {
                    extraDetail.map((value, index) => {
                        return <Stack key={index} direction={"row"}
                                      gap={"24px"}
                                      alignItems={"center"}>
                            <IconButton
                            sx={{background:"#fff2db",
                            borderRadius:"50%",
                            width:"100px",
                            height:"100px"}}
                            >
                                <img src={value.icon} alt={""} width={"50px"} height={"50px"}
                                     style={{objectFit:"cover"}}/>
                            </IconButton>
                            <Typography textTransform={"capitalize"} variant={"h6"}>
                                {value.name}
                            </Typography>

                        </Stack>
                    })
                }
            </Stack>
        </Stack>
    </div>
}