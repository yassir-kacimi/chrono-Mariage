import React, {useState} from 'react';
import db from "../service/firebase";
import "../styles/Offer.css";





function Offer() {
  
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  
  
  const Publish = (e) => {
    e.preventDefault();

    db.collection("Offers").add({
      category: category,
      text: description,
      image: image,
      price:price
    });

    setCategory("");
    setImage("");
    setDescription("");
    setPrice("");
  };
   
   
  return (
    <div className='Offer'>
      
     <form>
        <label className="label" for="services">Choose a Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}  className='services' name="services" id="service">
              <option value="Traiteur">Traiteur</option>
              <option value="Traiteur">Traiteur</option>
              <option value="Photograph">Photograph</option>
              <option value="Neggafa">Neggafa</option>
              <option value="Sales">Sales</option>
              <option value="Musicien">Musicien</option>
              <option value="Tailleur">Tailleur</option>
              <option value="invitations">invitations</option>
              <option value="Bijous">Bijous</option>

        </select>
        <div className="element media">
            <h4>Add an image </h4>
            <input
             value={image}
             onChange={(e) => setImage(e.target.value)}  
             className='inputI' type="text" size="37.8" ></input>
        </div>
        <div className="element descriptionOffer">
            <h4>Add a description</h4>
            <textarea
             value={description}
             onChange={(e) => setDescription(e.target.value)} 
             className='inputD' maxlength="78" rows = "3" cols = "40" name = "description">
            
            </textarea>
        </div>
        <div className="element price">
            <h4>Starting price</h4>
            <input
             value={price}
             onChange={(e) => setPrice(e.target.value)}
             className='inputP' type="number" ></input>
        </div>
        <button onClick={Publish} type="submit" class="btn btn-danger">Publish</button>
      </form>
      <div className='welcomeOffer'>
      <p>The key to your success on <strong>AlfM'brouk</strong> is the brand you build for yourself through your <strong>AlfM'brouk</strong> reputation.</p>
      </div>    
    </div>
  )
}

export default Offer