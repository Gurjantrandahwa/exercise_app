import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import DetailOfExercise from "../../Components/DetailOfExercise/DetailOfExercise";
import ExerciseVideos from "../../Components/ExerciseVideos/ExerciseVideos";
import SimilarExercises from "../../Components/SimilarExercises/SimilarExercises";
import {useParams} from "react-router-dom";
import {exerciseOptions, fetchData, youtubeOptions} from "../../Data/fetchData";

export default function ExerciseDetail() {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscle, setTargetMuscle] = useState([])
    const [equipmentMuscle, setEquipment] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetMuscle(targetMuscleExerciseData)


            const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipment(equipmentMuscleExerciseData)
        }
        fetchExerciseData()
    }, [id])
    return <div>
        <Box>
            <DetailOfExercise exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscle={targetMuscle} equipmentMuscle={equipmentMuscle}/>
        </Box>
    </div>
}