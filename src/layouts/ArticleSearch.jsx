import React, { useState } from 'react';
import { Input, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

export default function ArticleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState('');
  const [urlId, setUrlId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const searchUrl = `https://dergipark.org.tr/en/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(searchUrl, '_blank');
  };

  const handleApply = async () => {
    if (!url || !urlId) {
      setErrorMessage('Lütfen URL ve ID girin.');
      return;
    }

    try {
      const trimmedUrl = url.trim();
  
      const response = await axios.post(
        `http://localhost:6060/api/articles/add/article?id=${encodeURIComponent(urlId)}`,
        trimmedUrl, // Veriyi string olarak gönder
        {
          headers: {
            'Content-Type': 'text/plain' // Veri tipi olarak text/plain kullan
          }
        }
      );
      
      
  
      alert('POST request successfully sent!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) {
      setErrorMessage('Lütfen silinecek ID girin.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:6060/api/articles/delete/${deleteId}`);

      if (response.status !== 200) {
        throw new Error('DELETE request failed!');
      }

      alert('DELETE request successfully sent!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      {errorMessage && <Message negative>{errorMessage}</Message>}
      <Input
        placeholder='Ara...'
        size='big'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        action={{ icon: 'search', onClick: handleSearch }}
        actionPosition='right'
      />
      <Input
        placeholder='URL girin...'
        size='big'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Input
        placeholder='URL için ID girin...'
        size='big'
        value={urlId}
        onChange={(e) => setUrlId(e.target.value)}
      />
      <Button color='green' onClick={handleApply}>Uygula</Button>
      <Input
        placeholder='Silinecek ID girin...'
        size='big'
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <Button color='red' onClick={handleDelete}>Sil</Button>
    </div>
  );
}
