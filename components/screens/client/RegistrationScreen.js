import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { defaultStyles } from "../../consts/Styles";
import Constants from "expo-constants";
import CustomButton from '../../subcomponents/CustomButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import CountryPicker, { FlagButton, DARK_THEME } from 'react-native-country-picker-modal';//

//https://unpkg.com/browse/react-native-country-picker-modal@2.0.0/README.md
//import { Picker } from '@react-native-picker/picker';
//import { fontSize } from "../../consts/Fonts";
//import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list' //https://www.npmjs.com/package/react-native-dropdown-select-list
import FormValidator from "../../../utility/FormValidator";

export default function RegistrationScreen({ navigation }) {
      const data = {
            name: "", fName: "", lName: "", dob: "", height: "", weight: "",
            nationality: "", countryCode: '', stateOfResidence: "", homeAddress: "",
            diabetic: "", otherHealthIssues: "", occupation: ""
      }
      // Calculate maximum date (18 years from current date)
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() - 18);
      const [isCountryModalOpen, setIsCountryModalOpen] = useState(false)
      const [showDatePicker, setShowDatePicker] = useState(false);
      const [showStateOpenModal, setShowStateOpenModal] = useState(false);
      const [states, setStates] = useState(
            [
                  { key: 'Lagos', value: 'lagos' },
                  { key: 'Kano', value: 'kano' },
                  { key: 'Abia', value: 'abia' },
                  { key: 'Kaduna', value: 'kaduna' },
                  { key: 'Imo', value: 'Imo' },
                  { key: 'Bauchi', value: 'Bauchi' },
                  { key: 'Oyo', value: 'Oyo' },
                  { key: 'Kebbi', value: 'kebbi' },
                  { key: 'Anambra', value: 'anambra' },
            ]
      )
      const [otherhealthIssues, setOtherHealthIssues] = useState(
            [
                  { key: 'Cough', value: 'cough' },
                  { key: 'SoreThroat', value: 'sore throat' },
                  { key: 'ColorBlindness', value: 'color blindness' },
                  { key: 'Insomnia', value: 'color insomnia' },
                  { key: 'Ulcer', value: 'ulcer' },
                  { key: 'Eczema', value: 'eczema' },
            ]
      )
      const [selectedOtherHealthIssues, setSelectedOtherHealthIssues] = useState([])
      const [isLoading, setIsLoading] = useState(false)
      const [form, setForm] = useState(data);

      /*** form validation */
      const [validationRules] = useState({
            name: 'required',
            password: 'required|minlength:6',
            height: 'required',
            weight: 'required',
            homeAddress: 'required',
            occupation: 'required',
            dob: 'required',
            stateOfResidence: 'required',
            nationality: 'required',
            diabetic: 'required',
            otherHealthIssues: 'required'
      });
      const [errors, setErrors] = useState({});
      const validator = new FormValidator();
      const validateForm = () => {
            const isValid = validator.validateForm(form, validationRules);
            if (!isValid) {
                  setErrors(validator.errors);
                  console.error("errors: ", JSON.stringify(validator.errors))
                  return false;
            }
            // Form is valid, proceed with submission
            console.log('Form data:', form);
            return true
      };

      /**form validation ends */

      //StatusBarIOS.setHidden(true);

      /***  */
      const handleChange = (value, name) => {
            setForm((prevState) => {
                  return {
                        ...prevState,
                        [name]: value,
                  };
            });
            // delete formError[name];
      };

      const handleSubmit = () => {
            //console.log(selectedOtherHealthIssues.join(','))
            setIsLoading(true);
            //setForm(prev => ({ ...prev, otherHealthIssues: selectedOtherHealthIssues.join(',') }));
            form.otherHealthIssues = selectedOtherHealthIssues.join(',')
            console.log("Form: ", JSON.stringify(form));

            if (!validateForm()) {
                  setIsLoading(false);
                  return
            }
            //submit the form to backend

            setIsLoading(false);

            //after submitting route to the payment screen
            navigation.navigate("MakePaymentScreen")
      }
      const handleBack = () => {
            navigation.navigate("LoginScreen")
      }

      const onDateTimeChange = (event, selectedDate) => {
            const currentDate = selectedDate || new Date();
            setShowDatePicker(false);
            setForm(prev => ({ ...prev, dob: currentDate.toDateString() }));
            // Alert.alert("came")
      };

      const onCountrySelect = (country) => {
            // Alert.alert(JSON.stringify(country))
            setForm(prev => ({ ...prev, countryCode: country.cca2 }))
      }

      const [selected, setSelected] = React.useState("");
      const [showing, setShowing] = useState(false)


      const NameField=()=>{
        return(
              <View style={{ flex: 1, position: 'relative' }}>
                                          <View style={[styles.fieldSet, {}]}>
                                                <View style={[styles.legend, { display: 'flex', flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>Name</Text><MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <TextInput
                                                      placeholder=""
                                                      style={styles.input}
                                                      value={form.name}
                                                      onChangeText={(text) => handleChange(text, "name")}
                                                      name="name"
                                                      onFocus={() => { setErrors({}) }}
                                                />

                                          </View>
                                          {errors.name && <Text style={styles.errors}>{errors.name.join(', ')}</Text>}
                                    </View>
        )
      }

      const DOBNHField=()=>{
         return(
            <View style={[styles.genBlood, { flex: 1, position: 'relative' }]}>
                                          <View style={{ flex: 1, width: "45%" }}>
                                                <View style={[styles.fieldSet, { width: "100%", justifyContent: 'center' }]}>
                                                      <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                            <Text style={{ fontSize: 12 }}>Date Of Birth</Text><MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                      </View>
                                                      <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderWidth: 0, gap: 0, padding: 10 }}>
                                                            <TextInput
                                                                  placeholder=""
                                                                  style={[styles.bloodGrou, { borderWidth: 0, flex: 3, fontSize: 12, fontWeight: "400", color: '#000' }]}
                                                                  value={form.dob}//{form.dob instanceof Date ? form.dob.toDateString() + "" : ''}
                                                                  onChangeText={(text) => handleChange(text, "dob")}
                                                                  editable={false}
                                                            // onFocus={() => { setErrors({}) }}
                                                            />
                                                            <TouchableOpacity onPress={() => { setShowDatePicker(true) }} style={{ flex: 0 }}>
                                                                  <FontAwesome name="calendar" size={18} color="#298582" />
                                                                  {showDatePicker && (
                                                                        <DateTimePicker
                                                                              testID="dateTimePicker"
                                                                              value={form.dob.length > 0 ? new Date(form.dob) : new Date()} //{ form.dob instanceof Date ? form.dob : new Date()}
                                                                              mode="date" // Change it to 'time' for time picker
                                                                              is24Hour={true}
                                                                              display="default"
                                                                              onChange={(event, selectedDate) => onDateTimeChange(event, selectedDate)}
                                                                              //style={{ backgroundColor: '' }}
                                                                              maximumDate={maxDate}

                                                                        // minimumDate={}
                                                                        //dateFormat={}
                                                                        />
                                                                  )}
                                                            </TouchableOpacity>
                                                      </View>
                                                </View>
                                                {errors.dob && <Text style={styles.errors}>{errors.dob.join(', ')}</Text>}
                                          </View>

                                          <View style={{ flex: 1, width: '45%' }}>
                                                <View style={[styles.fieldSet, { width: "100%" }]}>
                                                      <View style={[styles.legend, { display: 'flex', flexDirection: 'row' }]}>
                                                            <Text style={{ fontSize: 12 }}>Height</Text>
                                                            <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                      </View>
                                                      <TextInput
                                                            placeholder=""
                                                            keyboardType='numeric'
                                                            style={styles.bloodGroup}
                                                            value={form.height}
                                                            onChangeText={(text) => handleChange(text, "height")}
                                                            onFocus={() => { setErrors({}) }}
                                                      />
                                                </View>
                                                {errors.height && <Text style={styles.errors}>{errors.height.join(', ')}</Text>}
                                          </View>
                                    </View>
         )
      }
      const CountryField=()=>{
        return(
             <View style={[styles.genBlood, { flex: 1, position: 'relative' }]}>
                                          <View style={{ flex: 1, width: '45%' }}>
                                                <View style={[styles.fieldSet, { width: "100%" }]}>
                                                      <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                            <Text style={{ fontSize: 12 }}>Weight</Text>
                                                            <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                      </View>
                                                      <TextInput
                                                            placeholder=""
                                                            keyboardType='numeric'
                                                            style={styles.bloodGroup}
                                                            value={form.weight}
                                                            onChangeText={(text) => handleChange(text, "weight")}
                                                            onFocus={() => { setErrors({}) }}
                                                      />
                                                </View>
                                                {errors.weight && <Text style={styles.errors}>{errors.weight.join(', ')}</Text>}
                                          </View>
                                          <View style={{ flex: 1, width: '45%' }}>
                                                <View style={[styles.fieldSet, { width: "100%" }]}>
                                                      <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                            <Text style={{ fontSize: 12 }}>Nationality</Text>
                                                            <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                      </View>
                                                      <View style={[styles.countryContainer, {}]}>
                                                     
                                                          {  
                                                            <CountryPicker
                                                                  placeholder={""}
                                                                  countryCode={form.countryCode}
                                                                  withFilter={true}
                                                                  withFlag={true}
                                                                  withCountryNameButton
                                                                  withCurrency={true}
                                                                  onSelect={(country) => { handleChange(country.cca2, 'countryCode'); handleChange(country.name, 'nationality') }}
                                                                  theme={{ ...DARK_THEME, fontSize: 12, onBackgroundTextColor: isCountryModalOpen ? '#fff' : '#000' }}
                                                                  modalProps={{ animationType: 'slide' }}
                                                                  containerButtonStyle={{
                                                                        borderWidth: 0,
                                                                        borderRadius: 5,
                                                                        paddingVertical: 0,
                                                                        paddingHorizontal: 0,
                                                                        backgroundColor: 'transparent',//'lightgray',
                                                                        borderColor: 'white', //'gray'
                                                                        width: 150,
                                                                        height: 50,
                                                                        justifyContent: 'center'

                                                                  }}
                                                                  onOpen={() => { setIsCountryModalOpen(true) }}
                                                                  onClose={() => { setIsCountryModalOpen(false) }}
                                                            />
                                                          }

                                                      </View>
                                                </View>
                                                {errors.nationality && <Text style={styles.errors}>{errors.nationality.join(', ')}</Text>}
                                          </View>
                                    </View>
        )
      }
      const StateOfResidenceField=()=>{
        return(
           <View style={{ flex: 1, position: 'relative', zIndex: 3 }}>
                                          <View style={[styles.fieldSet, {}]}>
                                                <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>State Of Residence</Text>
                                                      <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <View style={{
                                                      borderWidth: 0, width: '100%', width: '100%', height: "100%", justifyContent: 'center'
                                                }}>
                                                      <SelectList
                                                            setSelected={(val) => handleChange(val, 'stateOfResidence')}
                                                            data={states}
                                                            save="value"
                                                            placeholder=" "
                                                            search={true}
                                                            boxStyles={{ borderRadius: 5, borderWidth: 0, position: 'relative', width: '100%' }}
                                                            dropdownStyles={[styles.dropdownStyles, { height: 200 }]}
                                                            dropdownItemStyles={styles.dropdownItemStyles}
                                                            dropdownTextStyles={styles.dropdownTextStyles}

                                                      />
                                                </View>


                                          </View>
                                          {errors.stateOfResidence && <Text style={styles.errors}>{errors.stateOfResidence.join(', ')}</Text>}
                                    </View>
        )
      }
      const HomeAddressField=()=>{
        return(
           <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                                          <View style={[styles.fieldSet, {}]}>
                                                <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>Home Address</Text>
                                                      <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <TextInput
                                                      placeholder=""
                                                      style={[styles.input, {}]}
                                                      value={form.homeAddress}
                                                      onChangeText={(text) => handleChange(text, "homeAddress")}
                                                      onFocus={() => { setErrors({}) }}
                                                />
                                          </View>
                                          {errors.homeAddress && <Text style={styles.errors}>{errors.homeAddress.join(', ')}</Text>}
                                    </View>
        )
      }
      const DiabeticField=()=>{
        return(
           <View style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                                          <View style={[styles.fieldSet, { justifyContent: 'center' }]}>
                                                <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>Diabetic</Text>
                                                      <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <SelectList
                                                      setSelected={(val) => handleChange(val, 'diabetic')}
                                                      data={[{ key: 'yes', value: 'yes' }, { key: 'no', value: 'no' }]}
                                                      save="value"
                                                      placeholder=" "
                                                      search={false}
                                                      boxStyles={styles.boxStyles}
                                                      dropdownStyles={styles.dropdownStyles}
                                                      dropdownTextStyles={styles.dropdownTextStyles}
                                                />
                                          </View>
                                          {errors.diabetic && <Text style={styles.errors}>{errors.diabetic.join(', ')}</Text>}
                                    </View>
        )
      }
      const OtherHealthIssueField=()=>{
        return(
           <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                                          <View style={[styles.fieldSet, { justifyContent: 'center', alignItems: 'center' }]}>
                                                <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>Other Health Issues</Text>
                                                      <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <MultipleSelectList
                                                      setSelected={
                                                            (val) => {
                                                                  setSelectedOtherHealthIssues(val)
                                                            }}
                                                      data={otherhealthIssues}
                                                      save="value"
                                                      onSelect={() => { setErrors({}) }}
                                                      label=""
                                                      placeholder=" "
                                                      maxHeight={180}
                                                      boxStyles={[styles.boxStyles, { borderWidth: 0 }]}
                                                      dropdownStyles={[styles.dropdownStyles, { top: 50 }]}
                                                      dropdownItemStyles={styles.dropdownItemStyles}
                                                      dropdownTextStyles={styles.dropdownTextStyles}

                                                />
                                          </View>
                                          {errors.otherHealthIssues && <Text style={styles.errors}>{errors.otherHealthIssues.join(', ')}</Text>}
                                    </View>

        )
      }
      const OccupationField=()=>{
        return(
          <View style={{ flex: 1, position: 'relative' }}>
                                          <View style={[styles.fieldSet, { borderWidth: 1 }]}>
                                                <View style={[styles.legend, { flexDirection: 'row' }]}>
                                                      <Text style={{ fontSize: 12 }}>Occupation</Text>
                                                      <MaterialCommunityIcons name="asterisk" size={10} color="rgba(255,0,0,0.7)" />
                                                </View>
                                                <TextInput
                                                      placeholder=""
                                                      style={styles.input}
                                                      value={form.occupation}
                                                      onChangeText={(text) => handleChange(text, "occupation")}
                                                      onFocus={() => { setErrors({}) }}
                                                />

                                          </View>
                                          {errors.occupation && <Text style={styles.errors}>{errors.occupation.join(', ')}</Text>}
                                    </View>
        )
      }

      const SaveAndContinueButton=()=>{
        return(
           <View style={{ flex: 1, borderWidth: 0, justifyContent: "center" }}>
                                          <CustomButton text={"Save and Continue"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
                                    </View>
        )
      }

      const Loader=()=>{
        return(
          <View style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              position: 'absolute',
                              height: height,//+ 2 * Constants.statusBarHeight,
                              width: width,
                              borderWidth: 0
                        }}>
               <ActivityIndicator size="large" color="#00ff00" style={{ position: 'absolute', alignSelf: 'center' }} />
                        </View>
        )
      }
      return (
            <View style={defaultStyles.container}>
                  <View style={styles.content}>
                        <View style={styles.header}>
                              <Image source={require('../../../assets/logo.png')}
                                    style={{ width: 90, height: 50, marginBottom: 10 }} />
                        </View>


                        <View style={styles.body}>
                              <ScrollView
                                    nestedScrollEnabled={true}
                                    showsVerticalScrollIndicator={true}
                                    contentContainerStyle={styles.scrollViewContent}
                                    style={[styles.form]}
                              >
                                    <NameField/>

                                    <DOBNHField/>

                                    <CountryField/>

                                    <StateOfResidenceField/>

                                     <HomeAddressField/>

                                     <DiabeticField/>

                                     <OtherHealthIssueField/>
                                     
                                    <OccupationField/>

                                    <SaveAndContinueButton/>

                              </ScrollView>
                        </View>
                  </View >

                  {
                        isLoading &&
                           <Loader/>
                  }
            </View >
      );
}

const styles = StyleSheet.create({
      content: {
            flex: 1,
            //width: "100%",
            borderWidth: 0,
            marginTop: Constants.statusBarHeight,
            gap: 10
      },
      header: {
            flex: 1,
            //width: "100%",
            marginLeft: "70%",
            borderWidth: 0,
            marginBottom: 10
      },
      body: {
            flex: 20,
            //width: "100%",
            borderWidth: 0,
            // backgroundColor: "yellow"
      },
      form: {
            flex: 1,
            flexDirection: "column",
            // paddingLeft: 30,
            // paddingRight: 30,
            padding: 0,
            borderWidth: 0,
            // backgroundColor: "red",
            //position: 'absolute',
            width: "100%",
            height: "100%"
      },
      scrollViewContent: {
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            gap: 10,
            position: 'absolute',
            width: '100%',
            height: "100%"
      },
      fieldSet: {
            // marginTop: 5,
            // marginBottom: "5%",
            paddingHorizontal: 0,
            paddingBottom: 0,
            borderRadius: 20,
            borderWidth: 1,
            // alignItems: 'center',
            borderColor: 'rgba(0,0,0,0.2)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            flex: 1

      },
      legend: {
            position: 'absolute',
            top: -10,
            left: 10,
            // fontWeight: 'bold',
            backgroundColor: '#F2F2F2',
      },
      input: {
            //backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 0,
            borderRadius: 20,
            marginTop: 5,
            // borderColor: "green",
            borderWidth: 0,
            width: "99%",
            height: "90%",
            fontSize: 12,

      },
      genBlood: {
            //flex: 1,
            //justifyContent:'space-between',
            //  alignItems: 'center',
            flexDirection: "row",
            //width :"50%",
            borderWidth: 0,
            padding: 0,
            gap: 10

      },
      bloodGroup: {
            width: 150,
            marginTop: 5,
            //backgroundColor: "white",
            width: "90%",
            height: "90%",
            borderRadius: 20,
            paddingHorizontal: 10,
            borderWidth: 0,
            fontSize: 12,
      },
      buttonGroup: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
            marginTop: 2,
            borderWidth: 0
            //borderRadius:20,
      },
      button: {
            width: "80%",
            borderWidth: 1,
            borderRadius: 20,
            //marginLeft:20,
            padding: 10,
            borderColor: "#4FC48B",
      },
      buttonText: {
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
            color: "white"
      },
      // buttonOutlineText: {
      //   color: "black", 
      //   fontSize: 16,
      //   fontWeight: "700",
      // },
      errors: {
            color: 'red',
            fontSize: 10,
            borderWidth: 0,
            paddingHorizontal: 10
      },

      inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
      },

      countryContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            // height: "100%",
            width: '100%',
            borderWidth: 0
      },

      boxStyles: {
            borderWidth: 0,
            position: 'relative',
            padding: 0,
            width: '100%',
            //backgroundColor: 'red'
            // height: '100%',
            // justifyContent: 'center'
      },
      dropdownStyles: {
            position: 'absolute',
            top: 40,
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            zIndex: 10,
            padding: 0,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)'
      },
      dropdownItemStyles: {
            width: "100%"
      },
      dropdownTextStyles: {
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderBottomWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            fontSize: 14
      }

});

