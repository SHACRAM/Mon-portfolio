import React from "react";
import {Html, Button} from "@react-email/components";

export function Email(props){

    const {url} = props;

    return(

        <Html lang="fr">
            <Button href={url}>
                Cliquer ici
            </Button>

        </Html>
    )





}