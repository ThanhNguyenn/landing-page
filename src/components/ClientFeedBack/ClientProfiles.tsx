import React,{FC} from 'react'
import ClientProfile from './ClientProfile';
import {ClientProfilesStyled} from './ClientFeedBackStyled';


interface clients {
    client_img: string;
    client_des: string;
    client_name: string;
    client_position: string;
}

interface ClientProfiles {
    clients: clients[];
}

const ClientProfiles: React.FC<ClientProfiles> = ({clients}) => {
    return (
        <ClientProfilesStyled>
            {clients.map(client => <ClientProfile profile={client}/>)}
        </ClientProfilesStyled>
    )
}

export default ClientProfiles;
