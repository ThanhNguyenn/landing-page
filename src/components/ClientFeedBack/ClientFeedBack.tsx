import React,{FC} from 'react'
import ClientProfiles from './ClientProfiles';
import {ClientFeedBackStyled} from './ClientFeedBackStyled';

const ClientFeedBack = () => {

    const clients = [
        {
            client_img: '/images/image-emily.jpg',
            client_des: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
            client_name: 'Emily R.',
            client_position: 'Marketing Director',
        }, 
        {
            client_img: '/images/image-thomas.jpg',
            client_des: 'Sunnyside\s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience.',
            client_name: 'Thomas S.',
            client_position: 'Chief Oprating Officer',
        }, 
        {
            client_img: '/images/image-jennie.jpg',
            client_des: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
            client_name: 'Jennie F.',
            client_position: 'Business Owner',
        }
    ];





    return (
        <ClientFeedBackStyled>
            <h3>client testimonials</h3>
            <ClientProfiles clients={clients}/>
        </ClientFeedBackStyled>
    )
}

export default ClientFeedBack;