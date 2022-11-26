import React from "react";
import {Stack, Typography} from "@mui/material";

export default function BodyPart({images, item, setBodyPart, bodyPart}) {
    console.log(images)

    return <div>
        <Stack
            type={"button"}
            alignItems={"center"}
            justifyItems={"center"}
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "30px"
            }}
            onClick={() => {
                setBodyPart(item);
                window.scroll({top: 1400, left: 100, behavior: "smooth"})
            }
            }
        >
            <img src={"https://i.pinimg.com/564x/a6/20/ab/a620ab777c73fbdd9195331230a00a5f.jpg"}
                 alt={""}
                 style={{objectFit:"cover",marginTop:"20px"}}
                 width={150}
                 height={100}

            />
            <Typography
                fontSize={"24px"}
                textTransform={"capitalize"}
                fontWeight={"bold"}
                color={"#3A1212"}>
                {item}
            </Typography>
        </Stack>
    </div>
}