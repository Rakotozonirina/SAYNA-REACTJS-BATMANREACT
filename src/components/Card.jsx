import React from 'react'
import ArticleOne from '../photos/articles/article_1.png'
import ArticleTwo from '../photos/articles/article_2.png'
import { FaRegHeart } from "react-icons/fa";
import ArticleThree from '../photos/articles/article_3.png'
import ArticleFour from '../photos/articles/article_4.png'
import '../styles/Card.css'

const cardDatas = [
    {
        id: 1,
        image: ArticleOne,
        alt: "article one",
        title: 'Sweat “why so serious”',
        prix: "55€",
        promoprix: "32€",
        uniqueFeature: true,
    },
    {
        id: 2,
        image: ArticleTwo,
        alt: "article two",
        title: 'Horloge',
        prix: "16€",
        promoprix: "8€",
        uniqueFeature: false,
    },
    {
        id: 3,
        image: ArticleThree,
        alt: "article three",
        title: 'Mug',
        prix: "12€",
        promoprix: "9€",
        uniqueFeature: true,
    },
    {
        id: 4,
        image: ArticleFour,
        alt: "article four",
        title: 'Mug voyage',
        prix: "39€",
        promoprix: "39€",
        uniqueFeature: false,
    }
];

function Card() {
return (
    <>
        {cardDatas.map((Data) => (
            <div className='card-contenaire' key={Data.id}>
            <div className='card-image'>
                <div className='content-image'>
                    <img src={Data.image} alt={Data.alt} />
                    {Data.uniqueFeature ? (
                        <div className='sale'>
                        <h2>Sale</h2>
                        </div>) : (
                            <div></div>
                        )}
                    <FaRegHeart className='heart'/>
                </div>
                <article className='article-image'>
                    <h3>{Data.title}</h3>
                    <p><del>{Data.prix}</del> {Data.promoprix}</p>
                </article>
            </div>
            <button className='btn'>
                AJOUTER AU PANIER
            </button>
        </div>
        ))}
    </>

)
}

export default Card
