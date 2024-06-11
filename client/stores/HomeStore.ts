import { getDoctor, pagingDoctor } from "@/services/DoctorServices";
import { makeAutoObservable, runInAction } from "mobx";

export default class HomeStore {
    pageDoctor = []
    doctor = null

    constructor() {
        makeAutoObservable(this)
    }


    pagingDoctor = async () => {
       try {
        const res = await pagingDoctor()
        runInAction(() => {
            this.pageDoctor = res.data
        })
        this.setDoctors(res.data)
       } catch (error) {
        console.log(error);
       }
    }

    setDoctors = (pageDoctor: any) => {
        this.pageDoctor = pageDoctor
    }

    getDoctor = async (id: any) => {
        try {
            const { data } = await getDoctor(id)
            this.doctor = data;
        } catch (error) {
            console.log(error);
        }
    } 

    resetStore = () => {
        this.pageDoctor = []
        this.doctor = null
    }
}