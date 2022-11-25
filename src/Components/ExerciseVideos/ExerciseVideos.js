import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import Loader from "../Loader/Loader";

export default function ExerciseVideos({exerciseVideos, name}) {

    if (!exerciseVideos.length) return <Loader/>
    return <div>
        <Box
            sx={{marginTop: {lg: '100px', xs: "20px"}}}>
            <Typography variant={"h4"} mb={"35px"} textAlign={"center"}>
                Watch <span style={{color: "#ff2625", textTransform: "capitalize"}}> {name} </span> exercises videos
            </Typography>
            <Stack justifyContent={"flex-start"} flexWrap={"wrap"} alignItems={"center"}
                   sx={{
                       flexDirection: {lg: "row"},

                       // gap: {lg: "30px", xs: "5px"}
                   }}>
                {
                    exerciseVideos?.slice(0, 3).map((item, index) => {
                        return <Box key={index}
                                    width={400}
                                    height={400}
                                    margin={"auto"} justifyContent={"center"} display={"flex"}
                        flexWrap={"wrap"}
                        >
                            <a
                                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} width={"350px"}/>
                                <Typography variant={"h6"} color={"#fff"}  mt={"6px"}
                            >
                                    {item.video.title}
                                </Typography>
                                <Typography variant={"caption"} color={"lightgrey"}
                                >
                                    {item.video.channelName}
                                </Typography>
                            </a>
                        </Box>
                    })
                }
            </Stack>
        </Box>
    </div>
}