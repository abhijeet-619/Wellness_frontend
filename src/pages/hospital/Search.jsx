import SearchPatient from "../../components/common/SearchPatient";
import BlueButton from "../../components/header/BlueButton";
import Header from "../../components/header/Header";
import LogoutButton from "../../components/header/LogoutButton";
import React from "react";

const Search = () => {
    return (
        <>
            <Header>
                <BlueButton href='/hospital/add' text='Add Record' />
                <LogoutButton logoutFor='hospital' />
            </Header>
            <SearchPatient searchAs='hospital' />
        </>
    );
};

export default Search;
