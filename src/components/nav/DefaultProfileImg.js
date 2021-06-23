import React from 'react'
import ProfileImg_1 from './img/ProfileImg_1'
import ProfileImg_2 from './img/ProfileImg_2'
import ProfileImg_3 from './img/ProfileImg_3'
import ProfileImg_4 from './img/ProfileImg_4'
import ProfileImg_5 from './img/ProfileImg_5'
import ProfileImg_6 from './img/ProfileImg_6'
import ProfileImg_7 from './img/ProfileImg_7'
import ProfileImg_8 from './img/ProfileImg_8'
import ProfileImg_9 from './img/ProfileImg_9'

export default function DefaultProfileImg( { defaultImg } ) {
    return (
        <>
            { 
                defaultImg === 1 ? <ProfileImg_1/> :
                defaultImg === 2 ? <ProfileImg_2/> :
                defaultImg === 3 ? <ProfileImg_3/> :
                defaultImg === 4 ? <ProfileImg_4/> :
                defaultImg === 5 ? <ProfileImg_5/> : 
                defaultImg === 6 ? <ProfileImg_6/> :
                defaultImg === 7 ? <ProfileImg_7/> :
                defaultImg === 8 ? <ProfileImg_8/> :
                defaultImg === 9 ? <ProfileImg_9/> : ''
            }   
        </>
    )
}
