import './App.css';
import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from "../Books/BookList/books";
import EShopService from "../../repository/eshopRepository";
import Categories from "../Categories/categories";
import Header from "../Header/header";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";
import Authors from "../Authors/authors";
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return(
        <BrowserRouter>
            <Header />
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/categories" element=
                            {<Categories categories={this.state.categories}/>} />
                        <Route path="/books/add" element=
                            {<BookAdd
                                      authors={this.state.authors}
                                      categories={this.state.categories}
                                      onAddBook={this.addBook}/>}/>
                        <Route path="/books/edit/:id" element=
                            {<BookEdit authors={this.state.authors}
                                       categories={this.state.categories}
                                       onEditBook={this.editBook}
                                       book={this.state.selectedBook}/>}/>
                        <Route path="/books" element=
                            {<Books books={this.state.books}
                                    onDelete={this.deleteBook}
                                    onEdit={this.getBook}
                                    onMarkAsTaken={this.markAsTaken}/>} />
                        <Route path={"/"} exact element=
                            {<Books books={this.state.books}
                                    onDelete={this.deleteBook}/>} />
                        <Route path={"/authors"}  element={<Authors authors={this.state.authors}/>}/>
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
  }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }

  loadBooks = () => {
    EShopService.fetchBooks()
        .then((data) => {
          this.setState({
            books: data.data
          })
        });
  }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadAuthors = () => {
        EShopService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }


    deleteBook = (id) => {
        EShopService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) =>{
        EShopService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }
    addBook = (name, category, author, availableCopies) => {
        EShopService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    getBook = (id) => {
        EShopService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        EShopService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

}

export default App;
