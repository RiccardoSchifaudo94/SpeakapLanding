import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import avatar_1 from './../img/avatar_1.png';
import avatar_2 from './../img/avatar_2.png';
import avatar_3 from './../img/avatar_3.png';

{/* I started with good intentions, 
    initially I think to use a kind of mock data in order to iterate with the same logic of List Component the gallery of avatars with the own cite for testimonial gallery. 
    Unfortunately it is still static, work in progress ... */ }

function Carousel(){
    return (
        <div className="carosuelSection">
                    <article>
                        <cite>
                            “NYP Connect helps us keep our staff, mostly young part-timers, involved in the organisation in a modern and positive way. The combination of several well-known social media in one platform is perfect to connect with the individual employee in a way they feel comfortable with and respond to.”
                        </cite>
                        <h5>Victor Delgado</h5>
                        <span>New York Pizza - Heerenveen</span>
                    </article>
                    {/*   AVATARS gallery as navbar to slide the reviews with a click or a fade effect */ }
                    <div className="navAvatars">
                        <Avatar alt="User 1" src={avatar_1} style={{height:'78px',width:'78px'}}/>
                        <Avatar alt="User 2" src={avatar_2} style={{height:'78px',width:'78px'}}/>
                        <Avatar alt="User 3" src={avatar_3} style={{height:'78px',width:'78px'}}/>
                    </div>
        </div>
    )
}

export default Carousel;