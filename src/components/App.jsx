import { Container } from './App.styled';
import { Component, useState } from 'react';
import { fetchPictures } from '../services/api'

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';



 export function App() {
  
   //   state = {
//     inputPictureName: '',
//     pictures: [],
//     page: 1,
//     selectedPicture: '',
//     isModalOpen: false,
//     isLoading: false,
//     showLoadMoreButton: false,
//   };
   
   const [inputPictureName, setInputPictureName] = useState('')
   const [pictures, setPictures] = useState([])
   
   const getSearchbarInputPictureName = inputText => {
    this.setState({ inputPictureName: inputText });
  };

  const getPictures = (pictureName) => {
    fetchPictures(pictureName)
    .then(data => {
      this.setState({ pictures: data.hits})
    })
    .catch(error => console.log(error))
  }

  const openModal = link => {
    this.setState({ selectedPicture: link, isModalOpen: true });
  };

  const closeModal = () => {
    this.setState({ selectedPicture: '', isModalOpen: false });
  };

  const onLoadMore = async () => {
    this.setState({ isLoading: true });
    const { inputPictureName, pictures, page } = this.state;
    const nextPage = page + 1;
    const newPictures = await fetchPictures(inputPictureName, nextPage);
    this.setState({
      pictures: [...pictures, ...newPictures.hits],
      page: nextPage,
      showLoadMoreButton:
        newPictures.total > pictures.length + newPictures.hits.length,
      isLoading: false,
    });
  };
   
   return (
      <Container>
        <Searchbar onSubmit={this.getSearchbarInputPictureName} />
        {this.state.pictures.length !== 0 && (
          <ImageGallery
          pictures={this.state.pictures}
          openModal={this.openModal}
          />
        )}
        {this.state.selectedPicture && (
          <Modal onCloseModal={this.closeModal} showPicture={this.state.selectedPicture}/>
        )}
        {this.state.pictures.length !== 0 && (
        <Button
        handleLoadMore={this.onLoadMore}
      />
        )}
        {this.state.isLoading && (
          <Loader />
        )}
      
      </Container>
      
    );
   
}





// export class App extends Component {
//   state = {
//     inputPictureName: '',
//     pictures: [],
//     page: 1,
//     selectedPicture: '',
//     isModalOpen: false,
//     isLoading: false,
//     showLoadMoreButton: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.inputPictureName !== prevState.inputPictureName) {
//       this.getPictures(this.state.inputPictureName);
//     }
//   }

//   getSearchbarInputPictureName = inputText => {
//     this.setState({ inputPictureName: inputText });
//   };

//   getPictures = (pictureName) => {
//     fetchPictures(pictureName)
//     .then(data => {
//       this.setState({ pictures: data.hits})
//     })
//     .catch(error => console.log(error))
//   }

//   openModal = link => {
//     this.setState({ selectedPicture: link, isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ selectedPicture: '', isModalOpen: false });
//   };

//   onLoadMore = async () => {
//     this.setState({ isLoading: true });
//     const { inputPictureName, pictures, page } = this.state;
//     const nextPage = page + 1;
//     const newPictures = await fetchPictures(inputPictureName, nextPage);
//     this.setState({
//       pictures: [...pictures, ...newPictures.hits],
//       page: nextPage,
//       showLoadMoreButton:
//         newPictures.total > pictures.length + newPictures.hits.length,
//       isLoading: false,
//     });
//   };

//   render() {
//     return (
//       <Container>
//         <Searchbar onSubmit={this.getSearchbarInputPictureName} />
//         {this.state.pictures.length !== 0 && (
//           <ImageGallery
//           pictures={this.state.pictures}
//           openModal={this.openModal}
//           />
//         )}
//         {this.state.selectedPicture && (
//           <Modal onCloseModal={this.closeModal} showPicture={this.state.selectedPicture}/>
//         )}
//         {this.state.pictures.length !== 0 && (
//         <Button
//         handleLoadMore={this.onLoadMore}
//       />
//         )}
//         {this.state.isLoading && (
//           <Loader />
//         )}
      
//       </Container>
      
//     );
//   }
// }
