import axios from "axios";
import { API_ENPOINT } from "@/constants/LocalConst";

const API_PATH = API_ENPOINT + "/doctors";

export const  pagingDoctor = () => axios.get(API_PATH)

export const  getDoctor = (id: object) => axios.post(API_PATH + `/info`, id)