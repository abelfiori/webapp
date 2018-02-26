import React from 'react';
import {Grid, Image} from 'semantic-ui-react'
import ImageBarb from '../../assets/images/home/the_guardian_logo.png';


export default function FooterHome(){
  return(
  <div className = "footerHome" >
      <Grid style={{background:'white', padding:20}}>
            <Grid.Row centered>
                <Image src={ImageBarb} centered style={{opacity:.3, width:150, height:50}}/>
            </Grid.Row>
            <Grid.Row centered style={{textTransform: 'uppercase', fontSize:'.6rem', width:150, opacity:.6,fontWeight:900, marginTop:-25, lineHeight:'.8rem'}}>
                'Moneysupermarket for <br/>mental health'
            </Grid.Row>

        <h3 style={{fontSize:'1rem'}}>Everyone should have access to personalised wellbeing.</h3>
        <p> Better Space is your compass through an ever- expanding and sometimes confusing world of solutions.</p>
        <p>
        Whether its a proven mindfulness app, an energising social activity or a conversation with a top therapist, we’ve got a personalised directory for you.
        </p>
        <p>
           By answering some confidential questions, we can draw up a short list for you to chose from.
           </p>
        <h3 style={{fontSize:'1rem'}}>Trust is everything</h3>
        <p>
        Your confidence is our top priority. You can access your recommendations in anonymity. We’ll only ask you to share information for your benefit, we exercise the highest levels of data privacy.</p>
        <h3 style={{fontSize:'1rem'}}>Our business model</h3>
        <p>
        Wondering how we pay our bills? We’re like the App Store, making money if you buy paid for services. Better Space is free to use, and you’ll find many things that are free - that’s a big part of our social mission.
        </p>
      </Grid>
      <Grid.Row  style={{marginTop: 20,height:80, background:'#249ECD'}}>
        <h2 style={{zIndex:100, color:'white', padding:20}}>BetterSpace</h2>
      </Grid.Row>
    </div>
  )
}
