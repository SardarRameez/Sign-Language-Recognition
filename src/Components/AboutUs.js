import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export const AboutUs = () => {
    return (
        <Grid container>
            <Grid item xs={1} sm={1} md={4}>
            </Grid>
            <Grid item xs={9} sm={6} md={4} style={{margin:"20px 0px 20px 20px", textAlign:"justify", color:"white"}}>
                <Typography variant="body1" gutterBottom>
                    Communication is very important to human beings,
                    as it enables us to express ourselves.We communicate 
                    through speech, gestures, body language, reading, 
                    writing or through visual aids, speech being one of 
                    the most commonly used among them.Dumb People only 
                    use sign language for communication . It is difficult 
                    to understand for normal people.So there is a communication
                    gap between dumb people with normal person.
                    <br></br>
                    We convert PSL into Urdu text for communication between signers 
                    and non-signers. Main objective is to facilitate a large 
                    population of  hearing-impaired persons and making them an
                    integral part of the society
                    <br></br>
                    Sign Language Recognition (SLR) is a system in 
                    which Disabled person easily communicate with 
                    normal person .There is a massive communication
                    gap between the dumb communities with the general public.
                    By the  advancement  in science  and  technology, 
                    we  design an approach that can interpret gesture signs into text.
                    So that humans can understand easily.
                </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
            </Grid>
        </Grid>
    )
}
