import React, { useEffect, useState } from "react";
import Header from "../../../../component/header/Header";
import LabelledSelect from "../../../../component/signup/LabelledSelect";
import LabelledInput from "../../../../component/signup/LabelledInput"
import SubmitButton from "../../../../component/common/SubmitButton";
import SignupLayout from "../../../../component/layout/SignupOrAddLayout";
import axios from "axios";
import BlueButton from "../../../../component/header/BlueButton";
import LogoutButton from "../../../../component/header/LogoutButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "../../../../component/admin/IdModal";

function ChemistPage() { {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [qualification, setQualification] = useState("");
    const [shopName, setShopName] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const toast = useToast();

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            firstName: firstName.trim(),
            middleName: middleName.trim(),
            lastName: lastName.trim(),
            contact: contactNo.trim(),
            address: address.trim(),
            city: city.trim(),
            state: state.trim(),
            country: country.trim(),
            pincode: pincode.trim(),
            email: email.trim(),
            password: password.trim(),
            qualification: qualification.trim(),
            shopName: shopName.trim(),
        };

        const options = {
            method: "POST",
            url: "http://localhost:9000/api/auth/signup/chemist",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data,
        };
        axios
            .request(options)
            .then((response) => {
                setResponse(response.data.user);
                onOpen();
            })
            .catch((err) => {
                toast({
                    title: err.response.data,
                    status: "error",
                    isClosable: false,
                    position: "bottom-right",
                    duration: 2000,
                });
            });
    };

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.chemistId}
                    name={`${response.firstName} ${response.middleName} ${response.lastName}`}
                    contact={response.contact}
                    state={response.state}
                    city={response.city}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            )}
            <Header>
                <BlueButton href='/admin/signup/patient' text='Register Patient' />
                <BlueButton href='/admin/signup/doctor' text='Register Doctor' />
                <BlueButton href='/admin/signup/hospital' text='Register Hospital' />
                <LogoutButton logoutFor='admin' />
            </Header>
            <SignupLayout heading='Register Chemist'>
                <form onSubmit={onFormSubmitHandler}>
                    <LabelledInput
                        label='First Name'
                        id='FirstName'
                        value={firstName}
                        setFunction={setFirstName}
                        type='text'
                    />
                    <LabelledInput
                        label='Middle Name'
                        id='MiddleName'
                        value={middleName}
                        setFunction={setMiddleName}
                        type='text'
                    />
                    <LabelledInput
                        label='Last Name'
                        id='LastName'
                        value={lastName}
                        setFunction={setLastName}
                        type='text'
                    />
                    <LabelledInput
                        label='Contact No'
                        id='ContactNo'
                        value={contactNo}
                        setFunction={setContactNo}
                        type='text'
                    />
                    <LabelledInput
                        label='Shop name'
                        id='shopname'
                        value={shopName}
                        setFunction={setShopName}
                        type='text'
                    />
                    <LabelledInput
                        label='Address'
                        id='address'
                        value={address}
                        setFunction={setAddress}
                        type='text'
                    />
                    <LabelledInput
                        label='City'
                        id='city'
                        value={city}
                        setFunction={setCity}
                        type='text'
                    />
                    <LabelledInput
                        label='Pincode'
                        id='pincode'
                        value={pincode}
                        setFunction={setPincode}
                        type='text'
                    />
                    <LabelledInput
                        label='State'
                        id='state'
                        value={state}
                        setFunction={setState}
                        type='text'
                    />
                    <LabelledInput
                        label='Country'
                        id='country'
                        value={country}
                        setFunction={setCountry}
                        type='text'
                    />
                    <LabelledInput
                        label='Qualification'
                        id='qualification'
                        value={qualification}
                        setFunction={setQualification}
                        type='text'
                    />
                    <LabelledInput
                        label='Email'
                        id='email'
                        value={email}
                        setFunction={setEmail}
                        type='text'
                    />
                    <LabelledInput
                        label='Password'
                        id='password'
                        value={password}
                        setFunction={setPassword}
                        type='text'
                    />
                    <SubmitButton text='Register' />
                </form>
            </SignupLayout>
        </>
    );
};

}

export default ChemistPage