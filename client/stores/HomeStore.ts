import { getDoctor, pagingDoctor } from "@/services/DoctorServices";
import { makeAutoObservable, runInAction } from "mobx";

export default class HomeStore {
    pageDoctor = []
    doctor = null
    isLoading = false

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
            this.setIsLoading(true)
            
            const { data } = await getDoctor({id})
            this.doctor = data;
            this.setIsLoading(false)
        } catch (error) {
            console.log(error);
            this.setIsLoading(false)
        }
    } 

    setIsLoading = (isLoading: boolean) => {
        this.isLoading = isLoading
    }

    resetStore = () => {
        this.pageDoctor = []
        this.doctor = null
        this.isLoading = false
    }
}