package pl.koronawoj.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pl.koronawoj.domain.News;

@Repository
public interface NewsRepository extends MongoRepository<News, String> {

}
