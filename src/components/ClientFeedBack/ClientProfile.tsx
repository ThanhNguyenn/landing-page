import React,{FC} from 'react'
import { StringLiteralLike } from 'typescript';
import ClientProfiles from './ClientProfiles';
import {ClientProfileStyled} from './ClientFeedBackStyled';


type clientInfo = {
    client_img: string;
    client_des: string;
    client_name: string;
    client_position: string;
};

interface profile {
    profile: clientInfo,
}


const ClientProfile: FC<profile> = ({profile} ) => {
    return (
        <ClientProfileStyled>
            <img src={profile.client_img} alt="client_profile_picture" />
            <p>{profile.client_des}</p>
            <p>{profile.client_name}</p>
            <p>{profile.client_position}</p>
        </ClientProfileStyled>
    )
}

export default ClientProfile;