import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Navi = () => {
  // Makaleleri Göster menü öğesine tıklandığında yapılacak işlemi tanımla
  const handleShowArticles = () => {
    // Buraya tıklanınca yapılacak işlemi ekleyebilirsiniz
    // Örneğin, makaleleri göstermek için bir fonksiyon çağrısı yapabilirsiniz
    console.log("Makaleleri Göster'e tıklandı!");
  };

  return (
    <Menu inverted color='teal' size='large' fixed='top'>
      <Container>
        <Menu.Item header style={{ fontSize: '24px', textAlign: 'center' }}>
          Web Scrabing Akademi Sitesi
        </Menu.Item>
        {/* Makaleleri Göster menü öğesini tıklanabilir hale getir ve onClick olayına işlevi bağla */}
        <Menu.Menu position='left'>
          <Menu.Item name='Makaleleri Göster' onClick={handleShowArticles} />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navi;
