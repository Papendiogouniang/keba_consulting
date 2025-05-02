import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Développement personnel : 5 clés pour réussir',
      description: 'Découvrez des techniques éprouvées pour booster votre carrière et votre vie personnelle.',
      imageUrl: '/assets/beka.jpg', // Chemin local de l'image dans public/assets/
      link: '#'
    },
    {
      id: 2,
      title: 'Les dernières tendances en développement web',
      description: 'Les technologies web évoluent rapidement, voici les dernières tendances à suivre.',
      imageUrl: '/assets/kl.jpg', // Chemin local de l'image dans public/assets/
      link: '#'
    },
    {
      id: 3,
      title: 'Comment bien travailler en équipe',
      description: 'Les conseils pour améliorer la collaboration et la communication dans votre équipe.',
      imageUrl: '/assets/post3.jpg', // Chemin local de l'image dans public/assets/
      link: '#'
    }
  ];

  return (
    <div className="posts-section">
      <h2>Nos Derniers Articles</h2>
      <Row>
        {posts.map(post => (
          <Col key={post.id} sm={12} md={4} className="mb-4">
            <div className="custom-card">
              {/* Image de fond avec texte par-dessus */}
              <div
                className="card-img-container"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + post.imageUrl})`, // Chemin local vers les images
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px', // Hauteur de l'image
                }}
              >
                <div className="card-content">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-description">{post.description}</p>
                  <Button variant="primary" href={post.link}>
                    Lire l'article
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Posts;
