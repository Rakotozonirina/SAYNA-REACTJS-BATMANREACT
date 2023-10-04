import React, {useState} from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import '../styles/CustomSelect.css'

function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategorie, setSelectedCategorie] = useState([]);
    const categories = ["Bestsellers", "Goodies", "Vêtements", "Affiches/posters", "Comics", "Multimédia", "Équipement", "Bijoux", "Véhicules"];

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const toggleCategorie = (categorie) => {
        if(selectedCategorie.includes(categorie)){
            setSelectedCategorie(selectedCategorie.filter((item) => item !== categorie));
        } else {
            setSelectedCategorie([...selectedCategorie, categorie]);
        }
    };


return (
    <div className="custom-selected">
        <div className="selected-categorie" onClick={toggleDropDown}>
            Catégorie
            <span> <FaAngleDown/> </span>
        </div>
        <ul className={`categorie ${isOpen ? 'open' : ''}`}>
            {categories.map((categorie, index) => (
                <li key={index} onClick={() => toggleCategorie(categorie)}>
                    <div>
                        <input type='checkbox' checked={selectedCategorie.includes(categorie)} readOnly />
                        {categorie}
                    </div>
                    <span>(123)</span>
                </li>
            ))}
        </ul>
    </div>
)
}

export default CustomSelect
