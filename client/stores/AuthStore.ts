
import { User } from "@/models";
import { login, register, verification } from "@/services/AuthService";
import { makeAutoObservable, runInAction } from "mobx";
import Toast from "react-native-toast-message";

export default class AuthStore {
    searchObject = new User()
    user = null
    code = null
    isLoading = false
    constructor() {
        makeAutoObservable(this)
    }

    handleRegister = async (user:object) => {
        try {
            this.setIsLoading(true)
            const {data} = await register(user)

            this.user = data

            Toast.show({
                type: 'info',
                text1: "Đăng ký thành công!"
            })

            this.setIsLoading(false)
        } catch (error) {
            this.setIsLoading(false)
            console.log('Tạo tài khoản thất bại!!', error);
            Toast.show({
                type: 'info',
                text1:"Tài khoản đã tồn tại"
            })
        }
    }


    handleSendEmailCode = async (values:object) => {
        try {
            this.setIsLoading(true)
            const newEmail = {
                email: values?.email
            }
            const {data} = await verification(newEmail)
            this.setIsLoading(false)
            this.code = data?.data?.code
            Toast.show({
                type: 'success',
                text1: "Gửi mã xác thực thành công"
            })
        } catch (error) {
            this.setIsLoading(false)
            console.log("Gửi mã thất bại!!!", error);
            Toast.show({
                type: 'success',
                text1: "Gửi mã xác thực thất bại"
            })
        }
    }

    handleLogin = async (user:object) => {
        try {
            this.reset()
            this.setIsLoading(true)
            const {data} = await login(user)

            this.user = data

            Toast.show({
                type: 'info',
                text1: "Đăng nhập thành công!"
            })

            this.setIsLoading(false)
        } catch (error) {
            this.setIsLoading(false)
            console.log('Tạo tài khoản thất bại!!', error);
            Toast.show({
                type: 'info',
                text1:"Tài khoản không tồn tại"
            })
        }
    }

    setIsLoading = (isLoading: boolean) => {
        this.isLoading = isLoading
    }

    reset = () => {
        this.user = null
        this.isLoading = false
        this.code = null
        this.searchObject = new User()
    }
   
}