import React,{useState, useEffect} from 'react';
import db from "../service/firebase";
import Card from "./Card";
import "../styles/Cards.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Cards() {

        const [cards, setCards] = useState([]);
 
  
        useEffect(() => {
          db.collection("Offers").onSnapshot((snapshot) =>
            setCards(snapshot.docs.map((doc) => doc.data()))
          );
        }, []);

  return (
     <div className='Cards'>
     
     <div className='browszeRow'>
             <div className='browze'>
             <h2>Browse</h2>
             </div>
        <div className='next'>
        <p className='seeAll'>See All</p>
        <NavigateNextIcon/>
        </div>     
        
     </div>
     
     
     
     <div className='offercards'>      
       {cards.map((card) => (
                <Card
                key={card.id}   
                src={card.image}
                description={card.text}
                rating="5.0"
                price={card.price}
                // user={card.user}
        />
       ))}         
    </div>
    {/* <div className='SCards'>
       
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_9GTOjpcKnShK51QRz1azSbLLfpOaJ6i0Q&usqp=CAU.png"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   "
                rating="5.0"
                price="1000 MAD"
        />
       <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pZfiUeuU1e6ngAGud2a4BiqYFJFwDOVGFA&usqp=CAU" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2tnI2jHy-RiBTYtbhzRkJ03h-1gggb-D_A&usqp=CAU"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WHkwvBbRIqBVEiQ78_12XtmtFyecDr3-hA&usqp=CAU"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpgnRy1Utn3C47_WhBVXzq5b1Y10ztMIKBg&usqp=CAU"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
                rating="5.0"
                price="1000 MAD"
        />

          
    </div> */}
    
    
    
    
    </div>

  )
}

export default Cards