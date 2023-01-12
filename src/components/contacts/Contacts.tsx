import React from 'react';
import {Container} from "../../common/components/container/Container";
import {Title} from "../../common/components/title/Title";
import {Form} from "./form/Form";
import {MyMap} from "./map/MyMap";


export const Contacts = () => {
    return (
        <Container>
            <Title titleBig={"CONTACT"} titleSmall={'Get in Touch'}/>
            <Form/>
            <MyMap/>
        </Container>
    );
};
