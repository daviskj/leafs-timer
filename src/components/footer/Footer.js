import React from "react";
import './Footer.css';
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon,
    RedditShareButton, 
    RedditIcon
 } from "react-share";

const Footer = () =>{
    return (
        
        <footer>
            <div className="footer">
                <p>© SinceLeafsLastCup.com</p>

                <a href='https://en.wikipedia.org/wiki/List_of_Toronto_Maple_Leafs_seasons'> History</a>
                
            <div className="icons">
            
    <FacebookShareButton url={'sinceleafslastcup.netlify.app'}
                        quote='How long has it been?'>
    </FacebookShareButton>      
         <FacebookShareButton url={'sinceleafslastcup.netlify.app'}
                        quote='How long has it been?'>
            <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton url={'sinceleafslastcup.netlify.app'}
        quote='How long has it been?'>
        <TwitterIcon size={40} round />
        </TwitterShareButton>

        <RedditShareButton url={'sinceleafslastcup.netlify.app'}
        quote='How long has it been?'>
        <RedditIcon size={40} round />
        </RedditShareButton>
  </div>
  </div>
            </footer>
    );
}

export default Footer;