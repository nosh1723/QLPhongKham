import { ScrollView, Platform, Text, View, StyleSheet, Keyboard, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from 'react';
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from '@/components/CommonButton';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ViewComponent from "@/components/ViewComponent";
import { Image } from '@rneui/themed';
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { getDateFormat, getDateTimeFormat } from '@/constants/LocalFunction';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useStore } from "@/stores";


export default function Makeappointment() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const isIos = Platform.OS === "ios"

    const {doctor} = useStore().home


    const onChange = (event: any, selectedDate: any) => {
        if (!isIos) {
            const currentDate = selectedDate;
            setShow(false);
            setDate(currentDate);
        }
    };
    
    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const navigation = useNavigation()
    return (
        <GestureHandlerRootView >
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ borderRadius: 20, width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: '#696969', }}><Text style={{  textAlign: 'center', color: "#fff" }}>1</Text></View>
                            <Text style={{ marginLeft: 5, fontSize: 13 }}>Chọn lịch khám</Text>
                            <Entypo name="chevron-right" size={18} color="#ccc"  style={{ marginHorizontal: 8 }}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ borderRadius: 20, width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: '#696969', }}><Text style={{  textAlign: 'center', color: "#fff" }}>2</Text></View>
                            <Text style={{ marginLeft: 5, fontSize: 13 }}>Xác nhận</Text>
                            <Entypo name="chevron-right" size={18} color="#ccc"  style={{ marginHorizontal: 8 }}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ borderRadius: 20, width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: '#696969', }}><Text style={{  textAlign: 'center', color: "#fff" }}>3</Text></View>
                            <Text style={{ marginLeft: 5, fontSize: 13 }}>Nhận lịch hẹn</Text>
                        </TouchableOpacity>
                    </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={{ backgroundColor: '#f0f5fa', marginTop: 10, flexDirection: "column", alignItems: "center" }}>
                        
                        <View style={{ flexDirection: "row", padding: 12, backgroundColor: '#fff', marginBottom: 5, width: "92%", borderRadius: 20, alignItems: "center" }}>
                            <Image containerStyle={{ width: 70, height: 70, borderRadius: 1000, marginRight: 15 }} source={{ uri: "https://i.pinimg.com/736x/7d/9d/ed/7d9ded7751b328b1000bcfe4c1dc7727.jpg" }} />
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                                    {doctor?.name}
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 5 }}>
                                    <MaterialCommunityIcons name="check-decagram" size={16} color="#007bfc" style={{ paddingRight: 3 }} />
                                    <Text style={{ color: "#007bfc" }}>Bác sĩ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View>
                                <View >
                                    <Text style={{ fontWeight: '500', fontSize: 16, }}>Đặt lịch khám này cho:</Text>
                                </View>
                                < View style={{ marginTop: 10, backgroundColor: "#e1e8f2", borderRadius: 15, marginBottom: 15,  }}>
                                    <View style={{ padding: 12, borderRadius: 15, backgroundColor: "#fff"}}>
                                        <View style={styles.textrow}>
                                            <Text >Họ và tên</Text>
                                            <Text style={styles.textcell}>Nguyễn Khắc Lương</Text>
                                        </View>
                                        <View style={styles.textrow}>
                                            <Text>Giới tính</Text>
                                            <Text style={styles.textcell}>Nam</Text>
                                        </View>
                                        <View style={styles.textrow}>
                                            <Text>Ngày sinh</Text>
                                            <Text style={styles.textcell}>06/10/2003</Text>
                                        </View>
                                        <View style={styles.textrow}>
                                            <Text>Điện thoại</Text>
                                            <Text style={styles.textcell}>0898584206</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#e1e8f2', padding: 15, justifyContent: 'space-between', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                        <Text style={{ textAlign: 'center', fontWeight: '400' }}>Xem chi tiết</Text>
                                        <Text style={{ color: 'blue', textAlign: 'center', }}>Sửa hồ sơ</Text>
                                    </View>
                                </View>

                                <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 10, marginBottom: 10 }}>Chọn Ngày khám</Text>
                                <View style={{backgroundColor: "#fff", borderRadius: 15, }}>
                                    <CommonButton onPress={() => {
                                        show ? bottomSheetRef.current?.close() : bottomSheetRef.current?.expand()
                                        setShow(!show)
                                    }} style={{ borderWidth: 1, borderColor: "#e7ebed", borderRadius: 8, marginVertical: 15, marginHorizontal: 10 }} color='#transparent'>
                                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                            <Text style={{ fontWeight: 600 }}>{getDateFormat(date)} </Text>
                                            <FontAwesome name="angle-down" size={20} color="black" style={{ paddingLeft: 3, marginTop: -3 }} />
                                        </View>
                                    </CommonButton>
                                    {!isIos && show && <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={'date'}
                                        is24Hour={true}
                                        onChange={onChange}
                                        display='spinner'
                                        style={{ height: 120 }}
                                    />}
                                    
                                </View>
                                <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 10 }}>Chọn giờ khám</Text>
                                    <View style={{}}>
                                        <View style={{flexDirection: 'row', width: "100%", backgroundColor: "#fff", borderRadius: 15}}>
                                            <TouchableOpacity style={{backgroundColor: "#e1e8f2", padding: 10, flex: 1, flexDirection: "row", justifyContent: "center", borderTopRightRadius: 15, borderTopLeftRadius: 15, borderBottomRightRadius: 15}}><Text>Buổi sáng</Text></TouchableOpacity>
                                            <TouchableOpacity style={{backgroundColor: "#fff", padding: 10, flex: 1, flexDirection: "row", justifyContent: "center", borderTopRightRadius: 15, borderTopLeftRadius: 15}}><Text>Buổi chiều</Text></TouchableOpacity>
                                        </View>
                                        <View style={[styles.table, { backgroundColor: "#fff",borderBottomRightRadius: 15, borderBottomLeftRadius: 15, padding: 10, flexDirection: 'column', alignItems: 'center'}]}>
                                            {/* Header */}
                                            {/* Rows */}
                                            <View style={styles.row}>
                                                <Text style={styles.cell}>17:30 - 17:40</Text>
                                                <Text style={styles.cell}>17:40 - 17:50</Text>
                                                <Text style={styles.cell}>17:50 - 18:00</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <Text style={styles.cell}>18:00 - 18:10</Text>
                                                <Text style={styles.cell}>18:10 - 18:20</Text>
                                                <Text style={styles.cell}>18:20 - 18:30</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <Text style={styles.cell}>18:30 - 18:40</Text>
                                                <Text style={styles.cell}>18:40 - 18:50</Text>
                                                <Text style={styles.cell}>18:50 - 19:00</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <Text style={styles.cell}>19:00 - 19:10</Text>
                                                <Text style={styles.cell}>19:10 - 19:20</Text>
                                                <Text style={styles.cell}>19:20 - 19:30</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: '500', fontSize: 16, marginTop: 30 }}>Thông tin bổ sung (Không bắt buộc)</Text>
                                            <Text style={{ marginTop: 8 }}>Bạn có thể cung cấp thêm các thông tin như lý do khám, triệu chứng, đơn thuốc sử dụng gần đây</Text>
                                            <Text style={{ color: 'blue', height: 40, backgroundColor: '#ffffff', lineHeight: 40, textAlign: 'center', marginTop: 15, borderRadius: 10, }}>Tôi muốn gửi thêm thông tin </Text>
                                        </View>
                                    </View>
                                </View>
                                
                        </View>
                    </View>
                </ScrollView>
                <View style={{ padding: 10 }}>
                    <CommonButton title="Tiếp tục" style={{ borderRadius: 8, }}></CommonButton>
                </View>
                {show && isIos && <View style={{ height: "100%", width: "100%", backgroundColor: "#ddd", opacity: .5, position: "absolute" }}></View>}
                {isIos &&
                    <BottomSheet
                        ref={bottomSheetRef}
                        onChange={handleSheetChanges}
                        snapPoints={['35%']}
                        enablePanDownToClose
                        index={-1}
                        onClose={() => { setShow(false) }}
                    >
                        <BottomSheetView >
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                onChange={onChange}
                                display='spinner'
                                style={{ height: 120 }}
                            />
                            <View style={{ flexDirection: 'row', padding: 10, gap: 10, marginTop: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: "#e6e6e6", padding: 15, borderRadius: 10, flex: 1 }} onPress={() => setShow(false)}><Text style={{ color: "#000", fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Cancel</Text></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "#006778", padding: 15, borderRadius: 10, flex: 1 }} onPress={() => console.log(new Date(3373616131000).getDate())}><Text style={{ color: "#fff", fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Comfirm</Text></TouchableOpacity>
                            </View>

                        </BottomSheetView>
                    </BottomSheet>
                }

            </>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    text1: {
        marginTop: 7,
        fontSize: 14,

    },
    text2: {
        fontWeight: '600',
        fontSize: 15,
    },
    table: {
        borderWidth: 0,
        borderColor: '#000',
        backgroundColor: '#F8F8F8',

    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 9,
        minWidth: 120, // Đặt chiều rộng tối thiểu để có thể cuộn ngang nếu cần
        textAlign: 'center',
        borderRadius: 10,
        margin: 4,

    },
    cella: {
        padding: 9,
        minWidth: 120, // Đặt chiều rộng tối thiểu để có thể cuộn ngang nếu cần
        textAlign: 'center',
        margin: 4,

    },
    cellHeader: {
        borderWidth: 0,
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#f1f1f1',
        minWidth: 190,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginBottom: 10
    },
    textrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        backgroundColor: '#fff',
        padding: 5,
    },
    textcell: {
        fontWeight: '600',
    },
})