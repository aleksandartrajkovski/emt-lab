package mk.ukim.finki.emt.lab.config;

import jakarta.annotation.PostConstruct;
import lombok.Getter;
import mk.ukim.finki.emt.lab.model.Author;
import mk.ukim.finki.emt.lab.model.Book;
import mk.ukim.finki.emt.lab.model.Country;
import mk.ukim.finki.emt.lab.model.enumerations.Category;
import mk.ukim.finki.emt.lab.repository.AuthorRepository;
import mk.ukim.finki.emt.lab.repository.BookRepository;
import mk.ukim.finki.emt.lab.repository.CountryRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class DataInitializer {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public static List<Country> countries = new ArrayList<>();
    public static List<Author> authors = new ArrayList<>();
    public static List<Book> books = new ArrayList<>();

    public DataInitializer(BookRepository bookRepository,
                           AuthorRepository authorRepository,
                           CountryRepository countryRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }


    @PostConstruct
    public void init(){
        Country country1 = new Country("Macedonia", "Europe");
        Country country2 = new Country("USA", "North America");
        Country country3 = new Country("Canada", "North America");
        Country country4 = new Country("Switzerland", "Europe");
        Country country5 = new Country("Germany", "Europe");

        this.countryRepository.save(country1);
        this.countryRepository.save(country2);
        this.countryRepository.save(country3);
        this.countryRepository.save(country4);
        this.countryRepository.save(country5);

        Author author1 = new Author("Aleksandar", "Trajkovski", country1);
        Author author2 = new Author("Avtor", "Avtor", country1);
        Author author3 = new Author("AvtorName1", "AvtorName2", country2);
        Author author4 = new Author("Koco", "Racin", country3);
        Author author5 = new Author("Lav", "Tolstoj", country5);

        this.authorRepository.save(author1);
        this.authorRepository.save(author2);
        this.authorRepository.save(author3);
        this.authorRepository.save(author4);
        this.authorRepository.save(author5);

        Book book1 = new Book("Kniga1", Category.NOVEL, author3, 10);
        Book book2 = new Book("Kniga2", Category.FANTASY, author4, 20);
        Book book3 = new Book("Kniga3", Category.DRAMA, author1, 30);
        Book book4 = new Book("Kniga4", Category.THRILER, author2, 40);
        Book book5 = new Book("Kniga5", Category.BIOGRAPHY, author3, 50);
        Book book6 = new Book("Kniga6", Category.DRAMA, author5, 60);


        this.bookRepository.save(book1);
        this.bookRepository.save(book2);
        this.bookRepository.save(book3);
        this.bookRepository.save(book4);
        this.bookRepository.save(book5);
        this.bookRepository.save(book6);
    }
}
