import { TrackModel } from "../../../model/track";
import { Action } from "../classes/action";
import { TYPE_ACTIONS } from "../types";

const trackState = {
    tracks: [
        new TrackModel(1,
            "How to Become a Full-stack JavaScript Developer",
            `This track will let you begin 
            your journey of coding ! A complete track that 
            starts with Javascript basics and move towards advance 
            technologie. At the end of the track, You will able to 
            create beautiful responsive web application from scratch`,
            "https://i.imgur.com/Mlwee9g.png")
        ,
        new TrackModel(2,
            "Introduction to UI Design",
            `This track is an introduction to UI fundamentals.
             By the end of this course, you will be able to produce practical
              and effective User Interface (UI) designs. This will prepare 
              you for dealing with real world projects if you choose to move 
              towards a UI career path`,
            "https://i.imgur.com/xZBPU4E.jpg")
    ]
}


const TrackReducer = (prevState = trackState, action = new Action()) => {

    const { type, payload } = action

    switch (type) {

        case TYPE_ACTIONS.stack.ADD:
            return {
                tracks: [
                    ...prevState.tracks, { ...payload }
                ]
            }


        case TYPE_ACTIONS.stack.DEL:
            return {
                tracks: [
                    ...prevState.tracks.filter(t=>t.id !== payload.deletedId)
                ]
            }

        case TYPE_ACTIONS.stack.EDIT:
            return {
                tracks: [
                    ...prevState.tracks.map(
                        t=>{
                            if(t.id===payload.updatedId){
                                t = {...payload.newValue}
                            }
                            return t
                        }
                    )
                ]
            }


        default:
            return { tracks: [...prevState.tracks] }
    }
}

export default TrackReducer