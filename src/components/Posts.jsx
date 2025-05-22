import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Développement personnel : 5 clés pour réussir',
      description: 'Découvrez des techniques éprouvées pour booster votre carrière et votre vie personnelle.',
      imageUrl: '/assets/beka.jpg', // Chemin relatif correct
      link: '#'
    },
    {
      id: 2,
      title: 'Les dernières tendances en développement web',
      description: 'Les technologies web évoluent rapidement, voici les dernières tendances à suivre.',
      imageUrl: '/assets/kl.jpg', // Chemin relatif correct
      link: '#'
    },
    {
      id: 3,
      title: 'Comment bien travailler en équipe',
      description: 'Les conseils pour améliorer la collaboration et la communication dans votre équipe.',
      imageUrl: '/assets/post3.jpg', // Chemin relatif correct
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
              {/* Image de fond en haut */}
              <div
                className="card-img-container"
                style={{
                  backgroundImage: `url(${post.imageUrl})`, // Chemin relatif pour l'image
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center', // Positionner l'image en haut
                  height: '250px', // Ajuster la hauteur de l'image (en haut de la carte)
                }}
              >
                <div className="card-content" style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
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
