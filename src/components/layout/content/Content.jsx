import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import styles from "./Content.module.css";

const Content = () => {
    const products = [
        { id: 1, name: 'Produkt 1', description: 'Dies ist eine Beschreibung für Produkt 1.', price: '19,99 €', link: 'produkt1.html', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Produkt 2', description: 'Dies ist eine Beschreibung für Produkt 2.', price: '24,99 €', link: 'produkt2.html', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Produkt 3', description: 'Dies ist eine Beschreibung für Produkt 3.', price: '14,99 €', link: 'produkt3.html', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Produkt 4', description: 'Dies ist eine Beschreibung für Produkt 4.', price: '29,99 €', link: 'produkt4.html', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Produkt 5', description: 'Dies ist eine Beschreibung für Produkt 5.', price: '34,99 €', link: 'produkt5.html', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Produkt 6', description: 'Dies ist eine Beschreibung für Produkt 6.', price: '39,99 €', link: 'produkt6.html', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <main>
            {products.map(product => (
                <section className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="price">Preis: {product.price}</p>
                    <a href={product.link} className="button">Details ansehen</a>
                </section>
            ))}
        </main>
    );
};

export default Content;
