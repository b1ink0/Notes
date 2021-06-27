import React from 'react'
import ProfileImg1 from './img/ProfileImg_1'
import ProfileImg2 from './img/ProfileImg_2'
import ProfileImg3 from './img/ProfileImg_3'
import ProfileImg4 from './img/ProfileImg_4'
import ProfileImg5 from './img/ProfileImg_5'
import ProfileImg6 from './img/ProfileImg_6'
import ProfileImg7 from './img/ProfileImg_7'
import ProfileImg8 from './img/ProfileImg_8'
import ProfileImg9 from './img/ProfileImg_9'

export default function DefaultProfileImg( { defaultImg } ) {
    return (
        <>
            { 
                defaultImg === 1 ? <ProfileImg1/> :
                defaultImg === 2 ? <ProfileImg2/> :
                defaultImg === 3 ? <ProfileImg3/> :
                defaultImg === 4 ? <ProfileImg4/> :
                defaultImg === 5 ? <ProfileImg5/> : 
                defaultImg === 6 ? <ProfileImg6/> :
                defaultImg === 7 ? <ProfileImg7/> :
                defaultImg === 8 ? <ProfileImg8/> :
                defaultImg === 9 ? <ProfileImg9/> : ''
            }   
        </>
    )
}
