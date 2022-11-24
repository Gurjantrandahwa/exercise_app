import React from "react";
import {Stack, Typography} from "@mui/material";

export default function BodyPart({item, bodyPart, setBodyPart}) {
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
                gap: "47px"
            }}
            onClick={() => {
                setBodyPart(item);
                window.scroll({top: 1800, left: 100, behavior: "smooth "})
            }
            }
        >
            <img src={"https://cdn.dribbble.com/users/60447/screenshots/2603082/gymtown_logo_design_ancitis.jpg"}
                 alt={""}
                 width={100}
                 height={120}

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