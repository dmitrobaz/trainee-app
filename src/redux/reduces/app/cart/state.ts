import { useSelector } from "react-redux"

export const state = {
    people: ((state: any) => state.people),
    starships: ((state: any) => state.starships)

}